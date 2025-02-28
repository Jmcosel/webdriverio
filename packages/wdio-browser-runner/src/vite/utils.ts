import fs from 'node:fs/promises'
import url from 'node:url'
import path from 'node:path'
import { resolve } from 'import-meta-resolve'

import type { Environment, FrameworkPreset } from '../types.js'

export async function getTemplate(options: WebdriverIO.BrowserRunnerOptions, env: Environment, spec: string, processEnv = process.env) {
    const root = options.rootDir || process.cwd()
    const rootFileUrl = url.pathToFileURL(root).href

    let vueDeps = ''
    if (options.preset === 'vue') {
        try {
            const vueDir = path.dirname(url.fileURLToPath(await resolve('vue', `${rootFileUrl}/node_modules`)))
            const vueScript = (await fs.readFile(path.join(vueDir, 'dist', 'vue.global.prod.js'), 'utf-8')).toString()
            vueDeps += /*html*/`
            <script type="module">
                ${vueScript}
                window.Vue = Vue
            </script>`
            const vueCompilerDir = path.dirname(url.fileURLToPath(await resolve('@vue/compiler-dom', `${rootFileUrl}/node_modules`)))
            const vueCompilerScript = (await fs.readFile(path.join(vueCompilerDir, 'dist', 'compiler-dom.global.prod.js'))).toString()
            vueDeps += /*html*/`
            <script type="module">
                ${vueCompilerScript}
                window.VueCompilerDOM = VueCompilerDOM
            </script>`
        } catch (err: any) {
            throw new Error(
                `Fail to set-up Vue environment: ${err.message}\n\n` +
                'Make sure you have "vue" and "@vue/compiler-dom" installed as dependencies!\n' +
                `Error: ${err.stack}`
            )
        }

    }

    const mochaCSSHref = await resolve('mocha', `${rootFileUrl}/node_modules`).then(
        (p) => path.join(url.fileURLToPath(path.dirname(p)), 'mocha.css'),
        () => 'https://unpkg.com/mocha@10.0.0/mocha.css'
    )
    const mochaJSSrc = await resolve('mocha', `${rootFileUrl}/node_modules`).then(
        (p) => path.join(url.fileURLToPath(path.dirname(p)), 'mocha.js'),
        () => 'https://unpkg.com/mocha@10.0.0/mocha.js'
    )

    const sourceMapSupportDir = path.dirname(url.fileURLToPath(await resolve('source-map-support', import.meta.url)))

    return /* html */`
    <!doctype html>
    <html>
        <head>
            <title>WebdriverIO Browser Test</title>
            <link rel="icon" type="image/x-icon" href="https://webdriver.io/img/favicon.png">
            <link rel="stylesheet" href="${mochaCSSHref}">
            <script type="module" src="${mochaJSSrc}"></script>
            <script src="/@fs/${sourceMapSupportDir}/browser-source-map-support.js"></script>
            <script type="module">
                sourceMapSupport.install()

                /**
                 * Inject environment variables
                 */
                window.__wdioEnv__ = ${JSON.stringify(env)}
                window.__wdioSpec__ = '${spec}'
                window.__wdioEvents__ = []
                /**
                 * listen to window errors during bootstrap phase
                 */
                window.__wdioErrors__ = []
                addEventListener('error', (ev) => window.__wdioErrors__.push({
                    filename: ev.filename,
                    message: ev.message,
                    error: ev.error.stack
                }))
                /**
                 * mock process
                 */
                window.process = {
                    platform: 'browser',
                    env: {}
                }
            </script>
            ${vueDeps}
        </head>
        <body>
            <div id="mocha"></div>
            <script async type="module" src="@wdio/browser-runner/setup"></script>
            <script type="module">
                window.process.env = ${JSON.stringify(processEnv)}
            </script>
        </body>
    </html>`
}

export async function userfriendlyImport(preset: FrameworkPreset, pkg?: string) {
    if (!pkg) {
        return {}
    }

    try {
        return await import(pkg)
    } catch (err: any) {
        throw new Error(
            `Couldn't load preset "${preset}" given important dependency ("${pkg}") is not installed.\n` +
            `Please run:\n\n\tnpm install ${pkg}\n\tor\n\tyarn add --dev ${pkg}`
        )
    }
}

export function normalizeId(id: string, base?: string): string {
    if (base && id.startsWith(base)) {
        id = `/${id.slice(base.length)}`
    }

    return id
        .replace(/^\/@id\/__x00__/, '\0') // virtual modules start with `\0`
        .replace(/^\/@id\//, '')
        .replace(/^__vite-browser-external:/, '')
        .replace(/^node:/, '')
        .replace(/[?&]v=\w+/, '?') // remove ?v= query
        .replace(/\?$/, '') // remove end query mark
}

export async function getFilesFromDirectory (dir: string) {
    /**
     * check if dir exists
     */
    const isExisting = await fs.access(dir).then(() => true, () => false)
    if (!isExisting) {
        return []
    }

    let files = await fs.readdir(dir)
    files = (await Promise.all(files.map(async file => {
        const filePath = path.join(dir, file)
        const stats = await fs.stat(filePath)
        if (stats.isDirectory()) {
            return getFilesFromDirectory(filePath)
        } else if (stats.isFile()) {
            return filePath
        }
    }))).filter(Boolean) as string[]

    return files.reduce((all, folderContents) => all.concat(folderContents), [] as string[])
}

let mockedModulesList: ([string, string])[]
export async function getManualMocks(automockDir: string) {
    /**
     * read available mocks only one time
     */
    if (!mockedModulesList) {
        mockedModulesList = (await getFilesFromDirectory(automockDir))
            /**
             * seperate to module name and actual path
             */
            .map((filePath) => [
                filePath,
                filePath.slice(automockDir.length + 1).slice(0, -path.extname(filePath).length)
            ])
    }

    return mockedModulesList
}

export function getErrorTemplate(filename: string, error: Error) {
    return /*html*/`
        <pre>${error.stack}</pre>
        <script type="module">
            window.__wdioErrors__ = [{
                filename: "${filename}",
                message: \`${error.message}\`
            }]
        </script>
    `
}
