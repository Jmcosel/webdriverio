export default {
    '/session': {
        POST: {
            command: 'newSession',
            description:
                'The New Session command creates a new WebDriver session with the endpoint node. If the creation fails, a session not created error is returned.',
            ref: 'https://w3c.github.io/webdriver/#dfn-new-sessions',
            parameters: [
                {
                    name: 'capabilities',
                    type: 'object',
                    description:
                        'a JSON object, the set of capabilities that was ultimately merged and matched in the capability processing algorithm',
                    required: true,
                },
            ],
            returns: {
                type: 'Object',
                name: 'session',
                description:
                    'Object containing sessionId and capabilities of created WebDriver session.',
            },
        },
    },
    '/session/:sessionId': {
        DELETE: {
            command: 'deleteSession',
            description:
                'The Delete Session command closes any top-level browsing contexts associated with the current session, terminates the connection, and finally closes the current session.',
            ref: 'https://w3c.github.io/webdriver/#dfn-delete-session',
            parameters: [],
        },
    },
    '/status': {
        GET: {
            command: 'status',
            description:
                'The Status command returns information about whether a remote end is in a state in which it can create new sessions and can additionally include arbitrary meta information that is specific to the implementation.',
            ref: 'https://w3c.github.io/webdriver/#dfn-status',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L5-L16'],
            returns: {
                type: 'Object',
                name: 'status',
                description: 'Object containing status of the driver status.',
            },
        },
    },
    '/session/:sessionId/timeouts': {
        GET: {
            command: 'getTimeouts',
            description:
                'The Get Timeouts command gets timeout durations associated with the current session.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-timeouts',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L20-L24'],
            returns: {
                type: 'Object',
                name: 'timeouts',
                description:
                    'Object containing timeout durations for `script`, `pageLoad` and `implicit` timeouts.',
            },
        },
        POST: {
            command: 'setTimeouts',
            description:
                'The Set Timeouts command sets timeout durations associated with the current session. The timeouts that can be controlled are listed in the table of session timeouts below.',
            ref: 'https://w3c.github.io/webdriver/#dfn-set-timeouts',
            parameters: [
                {
                    name: 'implicit',
                    type: 'number',
                    description:
                        'integer in ms for session implicit wait timeout',
                    required: false,
                },
                {
                    name: 'pageLoad',
                    type: 'number',
                    description: 'integer in ms for session page load timeout',
                    required: false,
                },
                {
                    name: 'script',
                    type: 'number',
                    description: 'integer in ms for session script timeout',
                    required: false,
                },
            ],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L28-L33']
        },
    },
    '/session/:sessionId/url': {
        GET: {
            command: 'getUrl',
            description:
                'The Get Current URL command returns the URL of the current top-level browsing context.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-current-url',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L39-L43'],
            returns: {
                type: 'string',
                name: 'url',
                description:
                    'current top-level browsing context’s active document’s document URL',
            },
        },
        POST: {
            command: 'navigateTo',
            description:
                'The navigateTo (go) command is used to cause the user agent to navigate the current top-level browsing context a new location.',
            ref: 'https://w3c.github.io/webdriver/#dfn-navigate-to',
            parameters: [
                {
                    name: 'url',
                    type: 'string',
                    description:
                        'string representing an absolute URL (beginning with http(s)), possibly including a fragment (#...), could also be a local scheme (about: etc)',
                    required: true,
                },
            ],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L47-L51'],
            alternativeCommands: ['browser/url'],
            returns: {
                type: 'string',
                name: 'url',
                description:
                    'current document URL of the top-level browsing context.',
            },
        },
    },
    '/session/:sessionId/back': {
        POST: {
            command: 'back',
            description:
                'The Back command causes the browser to traverse one step backward in the joint session history of the current top-level browsing context. This is equivalent to pressing the back button in the browser chrome or calling `window.history.back`.',
            ref: 'https://w3c.github.io/webdriver/#dfn-back',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L55-L59'],
        },
    },
    '/session/:sessionId/forward': {
        POST: {
            command: 'forward',
            description:
                'The Forward command causes the browser to traverse one step forwards in the joint session history of the current top-level browsing context.',
            ref: 'https://w3c.github.io/webdriver/#dfn-forward',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L63-L69']
        },
    },
    '/session/:sessionId/refresh': {
        POST: {
            command: 'refresh',
            description:
                'The Refresh command causes the browser to reload the page in current top-level browsing context.',
            ref: 'https://w3c.github.io/webdriver/#dfn-refresh',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L73-L78']
        },
    },
    '/session/:sessionId/title': {
        GET: {
            command: 'getTitle',
            description:
                'The Get Title command returns the document title of the current top-level browsing context, equivalent to calling `document.title`.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-title',
            parameters: [],
            returns: {
                type: 'string',
                name: 'title',
                description:
                    'Returns a string which is the same as `document.title` of the current top-level browsing context.',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L82-L86']
        },
    },
    '/session/:sessionId/window': {
        GET: {
            command: 'getWindowHandle',
            description:
                'The Get Window Handle command returns the window handle for the current top-level browsing context. It can be used as an argument to Switch To Window.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-window-handle',
            parameters: [],
            returns: {
                type: 'string',
                name: 'handle',
                description:
                    'Returns a string which is the window handle for the current top-level browsing context.',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L90-L93']
        },
        DELETE: {
            command: 'closeWindow',
            description:
                'The Close Window command closes the current top-level browsing context. Once done, if there are no more top-level browsing contexts open, the WebDriver session itself is closed.',
            ref: 'https://w3c.github.io/webdriver/#dfn-close-window',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L97-L117']
        },
        POST: {
            command: 'switchToWindow',
            description:
                'The Switch To Window command is used to select the current top-level browsing context for the current session, i.e. the one that will be used for processing commands.',
            ref: 'https://w3c.github.io/webdriver/#dfn-switch-to-window',
            parameters: [
                {
                    name: 'handle',
                    type: 'string',
                    description:
                        'a string representing a window handle, should be one of the strings that was returned in a call to getWindowHandles',
                    required: true,
                },
            ],
            alternativeCommands: ['browser/switchWindow'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L121-L130']
        },
    },
    '/session/:sessionId/window/new': {
        POST: {
            command: 'createWindow',
            description: 'Create a new top-level browsing context.',
            ref: 'https://w3c.github.io/webdriver/#new-window',
            parameters: [
                {
                    name: 'type',
                    type: 'string',
                    description:
                        "Set to 'tab' if the newly created window shares an OS-level window with the current browsing context, or 'window' otherwise.",
                    required: true,
                },
            ],
            returns: {
                type: 'Object',
                name: 'window',
                description:
                    "New window object containing 'handle' with the value of the handle and 'type' with the value of the created window type",
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L134-L136']
        },
    },
    '/session/:sessionId/window/handles': {
        GET: {
            command: 'getWindowHandles',
            description:
                'The Get Window Handles command returns a list of window handles for every open top-level browsing context. The order in which the window handles are returned is arbitrary.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-window-handles',
            parameters: [],
            returns: {
                type: 'String[]',
                name: 'handles',
                description: 'An array which is a list of window handles.',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L140-L143']
        },
    },
    '/session/:sessionId/print': {
        POST: {
            command: 'printPage',
            description:
                'The Print Page command renders the document to a paginated PDF document. __Note:__ Chrome currently only supports this in [headless mode](https://webdriver.io/docs/capabilities/#run-browser-headless), see [`crbug753118`](https://bugs.chromium.org/p/chromium/issues/detail?id=753118)).',
            ref: 'https://w3c.github.io/webdriver/#print-page',
            parameters: [
                {
                    name: 'orientation',
                    type: 'string',
                    description: 'page orientation. Default: `portrait`',
                    required: false,
                },
                {
                    name: 'scale',
                    type: 'number',
                    description: 'page scale. Default: `1`',
                    required: false,
                },
                {
                    name: 'background',
                    type: 'boolean',
                    description: 'page background. Default: `false`',
                    required: false,
                },
                {
                    name: 'width',
                    type: 'number',
                    description: 'page width in cm. Default: `21.59` from page',
                    required: false,
                },
                {
                    name: 'height',
                    type: 'number',
                    description:
                        'page height in cm. Default: `27.94` from page',
                    required: false,
                },
                {
                    name: 'top',
                    type: 'number',
                    description:
                        'page margin in cm from top margin. Default: `1`',
                    required: false,
                },
                {
                    name: 'bottom',
                    type: 'number',
                    description:
                        'page margin in cm from bottom margin. Default: `1`',
                    required: false,
                },
                {
                    name: 'left',
                    type: 'number',
                    description:
                        'page margin in cm from left margin. Default: `1`',
                    required: false,
                },
                {
                    name: 'right',
                    type: 'number',
                    description:
                        'page margin in cm from right margin. Default: `1`',
                    required: false,
                },
                {
                    name: 'shrinkToFit',
                    type: 'boolean',
                    description: 'shrink pdf to fit in page. Default: `true`',
                    required: false,
                },
                {
                    name: 'pageRanges',
                    type: 'object[]',
                    description: 'page ranges. Default `[]`',
                    required: false,
                },
            ],
            returns: {
                type: 'string',
                name: 'pdf',
                description:
                    'The base64-encoded PDF representation of the paginated document.',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L150-L151']
        },
    },
    '/session/:sessionId/frame': {
        POST: {
            command: 'switchToFrame',
            description:
                'The Switch To Frame command is used to select the current top-level browsing context or a child browsing context of the current browsing context to use as the current browsing context for subsequent commands.',
            ref: 'https://w3c.github.io/webdriver/#dfn-switch-to-frame',
            parameters: [
                {
                    name: 'id',
                    type: '(number|object|null)',
                    description:
                        'one of three possible types: null: this represents the top-level browsing context (i.e., not an iframe), a Number, representing the index of the window object corresponding to a frame, an Element object received using `findElement`.',
                    required: true,
                },
            ],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L155-L168']
        },
    },
    '/session/:sessionId/frame/parent': {
        POST: {
            command: 'switchToParentFrame',
            description:
                'The Switch to Parent Frame command sets the current browsing context for future commands to the parent of the current browsing context.',
            ref: 'https://w3c.github.io/webdriver/#dfn-switch-to-parent-frame',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L172-L189']
        },
    },
    '/session/:sessionId/window/rect': {
        GET: {
            command: 'getWindowRect',
            description:
                'The Get Window Rect command returns the size and position on the screen of the operating system window corresponding to the current top-level browsing context.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-window-rect',
            parameters: [],
            returns: {
                type: 'Object',
                name: 'windowRect',
                description:
                    'A JSON representation of a "window rect" object. This has 4 properties: `x`, `y`, `width` and `height`.',
            },
            alternativeCommands: ['browser/getWindowSize'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L193-L196']
        },
        POST: {
            command: 'setWindowRect',
            description:
                'The Set Window Rect command alters the size and the position of the operating system window corresponding to the current top-level browsing context.',
            ref: 'https://w3c.github.io/webdriver/#dfn-set-window-rect',
            parameters: [
                {
                    name: 'x',
                    type: '(number|null)',
                    description: 'the screenX attribute of the window object',
                    required: true,
                },
                {
                    name: 'y',
                    type: '(number|null)',
                    description: 'the screenY attribute of the window object',
                    required: true,
                },
                {
                    name: 'width',
                    type: '(number|null)',
                    description:
                        'the width of the outer dimensions of the top-level browsing context, including browser chrome etc...',
                    required: true,
                },
                {
                    name: 'height',
                    type: '(number|null)',
                    description:
                        'the height of the outer dimensions of the top-level browsing context, including browser chrome etc...',
                    required: true,
                },
            ],
            alternativeCommands: ['browser/setWindowSize'],
            returns: {
                type: 'Object',
                name: 'windowRect',
                description:
                    'A JSON representation of a "window rect" object based on the new window state.',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L200-L204']
        },
    },
    '/session/:sessionId/window/maximize': {
        POST: {
            command: 'maximizeWindow',
            description:
                'The Maximize Window command invokes the window manager-specific "maximize" operation, if any, on the window containing the current top-level browsing context. This typically increases the window to the maximum available size without going full-screen.',
            ref: 'https://w3c.github.io/webdriver/#dfn-maximize-window',
            parameters: [],
            returns: {
                type: 'Object',
                name: 'windowRect',
                description:
                    'A JSON representation of a "window rect" object based on the new window state.',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L208-L212']
        },
    },
    '/session/:sessionId/window/minimize': {
        POST: {
            command: 'minimizeWindow',
            description:
                'The Minimize Window command invokes the window manager-specific "minimize" operation, if any, on the window containing the current top-level browsing context. This typically hides the window in the system tray.',
            ref: 'https://w3c.github.io/webdriver/#dfn-minimize-window',
            parameters: [],
            returns: {
                type: 'Object',
                name: 'windowRect',
                description:
                    'A JSON representation of a "window rect" object of the (new) current top-level browsing context.',
            },
        },
    },
    '/session/:sessionId/window/fullscreen': {
        POST: {
            command: 'fullscreenWindow',
            description:
                'The Fullscreen Window command invokes the window manager-specific “full screen” operation, if any, on the window containing the current top-level browsing context. This typically increases the window to the size of the physical display and can hide browser chrome elements such as toolbars.',
            ref: 'https://w3c.github.io/webdriver/#dfn-fullscreen-window',
            parameters: [],
            returns: {
                type: 'Object',
                name: 'windowRect',
                description:
                    'A JSON representation of a "window rect" object of the (new) current top-level browsing context.',
            },
        },
    },
    '/session/:sessionId/element': {
        POST: {
            command: 'findElement',
            description:
                'The Find Element command is used to find an element in the current browsing context that can be used for future commands. This command returns JSON representation of the element that can be passed to $ command to transform the reference to an extended WebdriverIO element.',
            ref: 'https://w3c.github.io/webdriver/#dfn-find-element',
            parameters: [
                {
                    name: 'using',
                    type: 'string',
                    description: 'a valid element location strategy',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'string',
                    description:
                        'the actual selector that will be used to find an element',
                    required: true,
                },
            ],
            returns: {
                type: 'object',
                name: 'element',
                description:
                    "A JSON representation of an element object, e.g. `{ 'element-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }`.",
            },
            alternativeCommands: ['browser/$'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L226-L232']
        },
    },
    '/session/:sessionId/shadow/:shadowId/element': {
        POST: {
            command: 'findElementFromShadowRoot',
            description:
                'The Find Element From Shadow Root command is used to find an element within the shadow root of an element that can be used for future commands. This command returns JSON representation of the element that can be passed to $ command to transform the reference to an extended WebdriverIO element.',
            ref: 'https://w3c.github.io/webdriver/#find-element-from-shadow-root',
            variables: [
                {
                    name: 'shadowId',
                    description: 'element id of a shadow root element',
                },
            ],
            parameters: [
                {
                    name: 'using',
                    type: 'string',
                    description: 'a valid element location strategy',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'string',
                    description:
                        'the actual selector that will be used to find an element',
                    required: true,
                },
            ],
            alternativeCommands: ['element/shadow$'],
            returns: {
                type: 'object',
                name: 'element',
                description:
                    "A JSON representation of an element shadow object, e.g. `{ 'element-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }`.",
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L236-L248']
        },
    },
    '/session/:sessionId/elements': {
        POST: {
            command: 'findElements',
            description:
                'The Find Elements command is used to find elements in the current browsing context that can be used for future commands. This command returns array of JSON representation of the elements that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).',
            ref: 'https://w3c.github.io/webdriver/#dfn-find-elements',
            parameters: [
                {
                    name: 'using',
                    type: 'string',
                    description: 'a valid element location strategy',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'string',
                    description:
                        'the actual selector that will be used to find an element',
                    required: true,
                },
            ],
            alternativeCommands: ['browser/$$'],
            returns: {
                type: 'object[]',
                name: 'elements',
                description:
                    "A (possibly empty) JSON list of representations of an element object, e.g. `[{ 'element-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }]`.",
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L252-L254']
        },
    },
    '/session/:sessionId/shadow/:shadowId/elements': {
        POST: {
            command: 'findElementsFromShadowRoot',
            description:
                'The Find Elements command is used to find elements within the shadow root of an element that can be used for future commands. This command returns array of JSON representation of the elements that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).',
            ref: 'https://w3c.github.io/webdriver/#find-elements-from-shadow-root',
            variables: [
                {
                    name: 'shadowId',
                    description: 'element id of a shadow root element',
                },
            ],
            alternativeCommands: ['element/shadow$$'],
            parameters: [
                {
                    name: 'using',
                    type: 'string',
                    description: 'a valid element location strategy',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'string',
                    description:
                        'the actual selector that will be used to find an element',
                    required: true,
                },
            ],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L258-L268'],
            returns: {
                type: 'object[]',
                name: 'elements',
                description:
                    "A (possibly empty) JSON list of representations of an element object, e.g. `{ 'element-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }`.",
            },
        },
    },
    '/session/:sessionId/element/:elementId/element': {
        POST: {
            command: 'findElementFromElement',
            description:
                'The Find Element From Element command is used to find an element from a web element in the current browsing context that can be used for future commands. This command returns JSON representation of the element that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).',
            ref: 'https://w3c.github.io/webdriver/#dfn-find-element-from-element',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [
                {
                    name: 'using',
                    type: 'string',
                    description: 'a valid element location strategy',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'string',
                    description:
                        'the actual selector that will be used to find an element',
                    required: true,
                },
            ],
            alternativeCommands: ['element/$'],
            returns: {
                type: 'object',
                name: 'element',
                description:
                    "A JSON representation of an element object, e.g. `{ 'element-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }`.",
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L272-L279']
        },
    },
    '/session/:sessionId/element/:elementId/elements': {
        POST: {
            command: 'findElementsFromElement',
            description:
                'The Find Elements From Element command is used to find elements from a web element in the current browsing context that can be used for future commands. This command returns array of JSON representation of the elements that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).',
            ref: 'https://w3c.github.io/webdriver/#dfn-find-elements-from-element',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [
                {
                    name: 'using',
                    type: 'string',
                    description: 'a valid element location strategy',
                    required: true,
                },
                {
                    name: 'value',
                    type: 'string',
                    description:
                        'the actual selector that will be used to find an element',
                    required: true,
                },
            ],
            alternativeCommands: ['element/$$'],
            returns: {
                type: 'object[]',
                name: 'elements',
                description:
                    "A (possibly empty) JSON list of representations of an element object, e.g. `[{ 'element-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }]`.",
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L283-L290']
        },
    },
    '/session/:sessionId/element/:elementId/shadow': {
        GET: {
            command: 'getElementShadowRoot',
            description:
                'Get the shadow root object of an element. The result object can be used to fetch elements within this shadow root using e.g. findElementFromShadowRoots or findElementsFromShadowRoots.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-active-element',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            returns: {
                type: 'string',
                name: 'element',
                description:
                    "A JSON representation of an element shadow root, e.g. `{ 'shadow-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }`.",
            },
            alternativeCommands: ['element/shadow$'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L294-L305']
        },
    },
    '/session/:sessionId/element/active': {
        GET: {
            command: 'getActiveElement',
            description:
                'Get Active Element returns the active element of the current browsing context’s document element. This command returns JSON representation of the element that can be passed to $ command to transform the reference to an extended WebdriverIO element (See findElement).',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-active-element',
            parameters: [],
            returns: {
                type: 'string',
                name: 'element',
                description:
                    "A JSON representation of an element object, e.g. `{ 'element-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }`.",
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L309-L316']
        },
    },
    '/session/:sessionId/element/:elementId/selected': {
        GET: {
            command: 'isElementSelected',
            description:
                'Is Element Selected determines if the referenced element is selected or not. This operation only makes sense on input elements of the Checkbox- and Radio Button states, or option elements.',
            ref: 'https://w3c.github.io/webdriver/#dfn-is-element-selected',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            returns: {
                type: 'Boolean',
                name: 'isSelected',
                description: '`true` or `false` based on the selected state.',
            },
            alternativeCommands: ['element/isSelected'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L322-L325']
        },
    },
    '/session/:sessionId/element/:elementId/displayed': {
        GET: {
            command: 'isElementDisplayed',
            description:
                "Is Element Displayed determines the visibility of an element which is guided by what is perceptually visible to the human eye. In this context, an element's displayedness does not relate to the `visibility` or `display` style properties.",
            ref: 'https://w3c.github.io/webdriver/#element-displayedness',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            returns: {
                type: 'Boolean',
                name: 'isDisplayed',
                description: '`true` or `false` based on the visible state.',
            },
            alternativeCommands: ['element/isDisplayed'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L331-L333']
        },
    },
    '/session/:sessionId/element/:elementId/attribute/:name': {
        GET: {
            command: 'getElementAttribute',
            description:
                'The Get Element Attribute command will return the attribute of a web element.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-element-attribute',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
                {
                    name: 'name',
                    description: 'name of the attribute value to retrieve',
                },
            ],
            parameters: [],
            returns: {
                type: 'string',
                name: 'attribute',
                description: 'The named attribute of the element.',
            },
            alternativeCommands: ['element/getAttribute'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L339-L341']
        },
    },
    '/session/:sessionId/element/:elementId/property/:name': {
        GET: {
            command: 'getElementProperty',
            description:
                'The Get Element Property command will return the result of getting a property of an element.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-element-property',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
                {
                    name: 'name',
                    description: 'name of the attribute property to retrieve',
                },
            ],
            parameters: [],
            returns: {
                type: 'string',
                name: 'property',
                description:
                    'The named property of the element, accessed by calling GetOwnProperty on the element object.',
            },
            alternativeCommands: ['element/getProperty'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L347-L349']
        },
    },
    '/session/:sessionId/element/:elementId/css/:propertyName': {
        GET: {
            command: 'getElementCSSValue',
            description:
                'The Get Element CSS Value command retrieves the computed value of the given CSS property of the given web element.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-element-css-value',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
                {
                    name: 'propertyName',
                    description: 'name of the CSS property to retrieve',
                },
            ],
            parameters: [],
            alternativeCommands: ['element/getCSSProperty'],
            returns: {
                type: 'string',
                name: 'cssValue',
                description:
                    "The computed value of the parameter corresponding to property name from the element's style declarations (unless the document type is xml, in which case the return value is simply the empty string).",
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L355-L357']
        },
    },
    '/session/:sessionId/element/:elementId/text': {
        GET: {
            command: 'getElementText',
            description:
                'The Get Element Text command intends to return an element’s text "as rendered". An element\'s rendered text is also used for locating a elements by their link text and partial link text.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-element-text',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            returns: {
                type: 'string',
                name: 'text',
                description:
                    'The visible text of the element (including child elements), following the algorithm defined in the Selenium Atoms for [`bot.dom.getVisibleText`](https://github.com/SeleniumHQ/selenium/blob/e09e28f016c9f53196cf68d6f71991c5af4a35d4/javascript/atoms/dom.js#L981).',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L363-L365']
        },
    },
    '/session/:sessionId/element/:elementId/name': {
        GET: {
            command: 'getElementTagName',
            description:
                'The Get Element Tag Name command returns the qualified element name of the given web element.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-element-tag-name',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            returns: {
                type: 'string',
                name: 'text',
                description: 'The tagName attribute of the element.',
            },
            alternativeCommands: ['element/getTagName'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L371-L373']
        },
    },
    '/session/:sessionId/element/:elementId/rect': {
        GET: {
            command: 'getElementRect',
            description:
                'The Get Element Rect command returns the dimensions and coordinates of the given web element.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-element-rect',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            returns: {
                type: 'Object',
                name: 'elementRect',
                description:
                    'A JSON object representing the position and bounding rect of the element.',
            },
            alternativeCommands: ['element/getSize', 'element/getLocation'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L379-L381']
        },
    },
    '/session/:sessionId/element/:elementId/enabled': {
        GET: {
            command: 'isElementEnabled',
            description:
                'Is Element Enabled determines if the referenced element is enabled or not. This operation only makes sense on form controls.',
            ref: 'https://w3c.github.io/webdriver/#dfn-is-element-enabled',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            returns: {
                type: 'Boolean',
                name: 'isEnabled',
                description:
                    'If the element is in an xml document, or is a disabled form control: `false`, otherwise, `true`.',
            },
            alternativeCommands: ['element/isEnabled'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L387-L390']
        },
    },
    '/session/:sessionId/element/:elementId/click': {
        POST: {
            command: 'elementClick',
            description:
                "The Element Click command scrolls into view the element if it is not already pointer-interactable, and clicks its in-view center point. If the element's center point is obscured by another element, an element click intercepted error is returned. If the element is outside the viewport, an element not interactable error is returned.",
            ref: 'https://w3c.github.io/webdriver/#dfn-element-click',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            alternativeCommands: ['element/click'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L396-L398']
        },
    },
    '/session/:sessionId/element/:elementId/clear': {
        POST: {
            command: 'elementClear',
            description:
                'The Element Clear command scrolls into view an editable or resettable element and then attempts to clear its selected files or text content.',
            ref: 'https://w3c.github.io/webdriver/#dfn-element-clear',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            alternativeCommands: ['element/clearValue'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L404-L407']
        },
    },
    '/session/:sessionId/element/:elementId/value': {
        POST: {
            command: 'elementSendKeys',
            description:
                'The Element Send Keys command scrolls into view the form control element and then sends the provided keys to the element. In case the element is not keyboard-interactable, an element not interactable error is returned.<br /><br />The key input state used for input may be cleared mid-way through "typing" by sending the null key, which is U+E000 (NULL).',
            ref: 'https://w3c.github.io/webdriver/#dfn-element-send-keys',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [
                {
                    name: 'text',
                    type: 'string',
                    description: 'string to send as keystrokes to the element',
                    required: true,
                },
            ],
            alternativeCommands: ['element/addValue', 'element/setValue'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L413-L416']
        },
    },
    '/session/:sessionId/source': {
        GET: {
            command: 'getPageSource',
            description:
                'The Get Page Source command returns a string serialization of the DOM of the current browsing context active document.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-page-source',
            parameters: [],
            returns: {
                type: 'string',
                name: 'pageSource',
                description:
                    'the DOM of the current browsing context active document',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L420-L421']
        },
    },
    '/session/:sessionId/execute/sync': {
        POST: {
            command: 'executeScript',
            description:
                'The Execute Script command executes a JavaScript function in the context of the current browsing context and returns the return value of the function.',
            ref: 'https://w3c.github.io/webdriver/#dfn-execute-script',
            parameters: [
                {
                    name: 'script',
                    type: 'string',
                    description:
                        'a string, the Javascript function body you want executed',
                    required: true,
                },
                {
                    name: 'args',
                    type: '(string|object|number|boolean|undefined)[]',
                    description:
                        'an array of JSON values which will be deserialized and passed as arguments to your function',
                    required: true,
                },
            ],
            returns: {
                type: '*',
                name: 'result',
                description:
                    "Either the return value of your script, the fulfillment of the Promise returned by your script, or the error which was the reason for your script's returned Promise's rejection.",
            },
            alternativeCommands: ['browser/execute'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L425-L426']
        },
    },
    '/session/:sessionId/execute/async': {
        POST: {
            command: 'executeAsyncScript',
            description:
                'The Execute Async Script command causes JavaScript to execute as an anonymous function. Unlike the Execute Script command, the result of the function is ignored. Instead an additional argument is provided as the final argument to the function. This is a function that, when called, returns its first argument as the response.',
            ref: 'https://w3c.github.io/webdriver/#dfn-execute-async-script',
            parameters: [
                {
                    name: 'script',
                    type: 'string',
                    description:
                        'a string, the Javascript function body you want executed',
                    required: true,
                },
                {
                    name: 'args',
                    type: '(string|object|number|boolean|undefined)[]',
                    description:
                        'an array of JSON values which will be deserialized and passed as arguments to your function',
                    required: true,
                },
            ],
            returns: {
                type: '*',
                name: 'result',
                description:
                    "Either the return value of your script, the fulfillment of the Promise returned by your script, or the error which was the reason for your script's returned Promise's rejection.",
            },
            alternativeCommands: ['browser/executeAsync'],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L430-L434']
        },
    },
    '/session/:sessionId/cookie': {
        GET: {
            command: 'getAllCookies',
            description:
                'The Get All Cookies command returns all cookies associated with the address of the current browsing context’s active document.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-all-cookies',
            parameters: [],
            returns: {
                type: 'Object[]',
                name: 'cookies',
                description:
                    'A list of serialized cookies. Each serialized cookie has a number of optional fields which may or may not be returned in addition to `name` and `value`.',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L438-L455']
        },
        POST: {
            command: 'addCookie',
            description:
                "The Add Cookie command adds a single cookie to the cookie store associated with the active document's address.",
            ref: 'https://w3c.github.io/webdriver/#dfn-adding-a-cookie',
            parameters: [
                {
                    name: 'cookie',
                    type: 'object',
                    description:
                        'A JSON object representing a cookie. It must have at least the name and value fields and could have more, including expiry-time and so on',
                    required: true,
                },
            ],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L459-L477']
        },
        DELETE: {
            command: 'deleteAllCookies',
            description:
                "The Delete All Cookies command allows deletion of all cookies associated with the active document's address.",
            ref: 'https://w3c.github.io/webdriver/#dfn-delete-all-cookies',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L481-L485']
        },
    },
    '/session/:sessionId/cookie/:name': {
        GET: {
            command: 'getNamedCookie',
            description:
                "The Get Named Cookie command returns the cookie with the requested name from the associated cookies in the cookie store of the current browsing context's active document. If no cookie is found, a no such cookie error is returned.",
            ref: 'https://w3c.github.io/webdriver/#dfn-get-named-cookie',
            variables: [
                {
                    name: 'name',
                    description: 'name of the cookie to retrieve',
                },
            ],
            parameters: [],
            returns: {
                type: 'Object',
                name: 'cookie',
                description:
                    'A serialized cookie, with name and value fields. There are a number of optional fields like `path`, `domain`, and `expiry-time` which may also be present.',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L489-L503']
        },
        DELETE: {
            command: 'deleteCookie',
            description:
                "The Delete Cookie command allows you to delete either a single cookie by parameter name, or all the cookies associated with the active document's address if name is undefined.",
            ref: 'https://w3c.github.io/webdriver/#dfn-delete-cookie',
            variables: [
                {
                    name: 'name',
                    description: 'name of the cookie to delete',
                },
            ],
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L507-L512']
        },
    },
    '/session/:sessionId/actions': {
        POST: {
            command: 'performActions',
            description:
                'The Perform Actions command is used to execute complex user actions. See [spec](https://github.com/jlipps/simple-wd-spec#perform-actions) for more details.',
            ref: 'https://w3c.github.io/webdriver/#dfn-perform-actions',
            parameters: [
                {
                    name: 'actions',
                    type: 'object[]',
                    description:
                        'a list of objects, each of which represents an input source and its associated actions',
                    required: true,
                },
            ],
        },
        DELETE: {
            command: 'releaseActions',
            description:
                'The Release Actions command is used to release all the keys and pointer buttons that are currently depressed. This causes events to be fired as if the state was released by an explicit series of actions. It also clears all the internal state of the virtual devices.',
            ref: 'https://w3c.github.io/webdriver/#dfn-release-actions',
            parameters: [],
        },
    },
    '/session/:sessionId/alert/dismiss': {
        POST: {
            command: 'dismissAlert',
            description:
                'The Dismiss Alert command dismisses a simple dialog if present, otherwise error. A request to dismiss an alert user prompt, which may not necessarily have a dismiss button, has the same effect as accepting it.',
            ref: 'https://w3c.github.io/webdriver/#dfn-dismiss-alert',
            parameters: [],
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L516-L517']
        },
    },
    '/session/:sessionId/alert/accept': {
        POST: {
            command: 'acceptAlert',
            description:
                'The Accept Alert command accepts a simple dialog if present, otherwise error.',
            ref: 'https://w3c.github.io/webdriver/#dfn-accept-alert',
            parameters: [],
        },
    },
    '/session/:sessionId/alert/text': {
        GET: {
            command: 'getAlertText',
            description:
                'The Get Alert Text command returns the message of the current user prompt. If there is no current user prompt, it returns an error.',
            ref: 'https://w3c.github.io/webdriver/#dfn-get-alert-text',
            parameters: [],
            returns: {
                type: 'string',
                name: 'alertText',
                description: 'The message of the user prompt.',
            },
            exampleReferences: ['https://github.com/webdriverio/example-recipes/blob/e8b147e88e7a38351b0918b4f7efbd9ae292201d/api/webdriver/examples.js#L521-L522']
        },
        POST: {
            command: 'sendAlertText',
            description:
                'The Send Alert Text command sets the text field of a window.prompt user prompt to the given value.',
            ref: 'https://w3c.github.io/webdriver/#dfn-send-alert-text',
            parameters: [
                {
                    name: 'text',
                    type: 'string',
                    description: 'string to set the prompt to',
                    required: true,
                },
            ],
        },
    },
    '/session/:sessionId/screenshot': {
        GET: {
            command: 'takeScreenshot',
            description:
                "The Take Screenshot command takes a screenshot of the top-level browsing context's viewport.",
            ref: 'https://w3c.github.io/webdriver/#dfn-take-screenshot',
            parameters: [],
            returns: {
                type: 'string',
                name: 'screenshot',
                description:
                    'The base64-encoded PNG image data comprising the screenshot of the initial viewport.',
            },
        },
    },
    '/session/:sessionId/element/:elementId/screenshot': {
        GET: {
            command: 'takeElementScreenshot',
            description:
                'The Take Element Screenshot command takes a screenshot of the visible region encompassed by the bounding rectangle of an element.',
            ref: 'https://w3c.github.io/webdriver/#dfn-take-element-screenshot',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [
                {
                    name: 'scroll',
                    type: 'boolean',
                    description: 'scroll into view the element. Default: true',
                    required: false,
                },
            ],
            returns: {
                type: 'string',
                name: 'screenshot',
                description:
                    'The base64-encoded PNG image data comprising the screenshot of the visible region of an element’s bounding rectangle after it has been scrolled into view.',
            },
        },
    },
    '/session/:sessionId/element/:elementId/computedrole': {
        GET: {
            command: 'getElementComputedRole',
            description: 'Get the computed WAI-ARIA role of an element.',
            ref: 'https://w3c.github.io/webdriver/#get-computed-role',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            returns: {
                type: 'string',
                name: 'role',
                description:
                    'The result of computing the WAI-ARIA role of element.',
            },
        },
    },
    '/session/:sessionId/element/:elementId/computedlabel': {
        GET: {
            command: 'getElementComputedLabel',
            description: 'Get the accessible name of the element.',
            ref: 'https://w3c.github.io/webdriver/#get-computed-label',
            variables: [
                {
                    name: 'elementId',
                    description:
                        'the id of an element returned in a previous call to Find Element(s)',
                },
            ],
            parameters: [],
            returns: {
                type: 'string',
                name: 'label',
                description:
                    'The result of a Accessible Name and Description Computation for the Accessible Name of the element.',
            },
        },
    },
    '/session/:sessionId/permissions': {
        POST: {
            command: 'setPermissions',
            description:
                "Simulates user modification of a PermissionDescriptor's permission state. __Note:__ this feature has not landed in all browsers yet.",
            ref: 'https://w3c.github.io/permissions/#set-permission-command',
            examples: [
                [
                    '// set midi permissions',
                    'browser.setPermissions({',
                    "  name: 'midi',",
                    '  sysex; true',
                    ", 'granted'); // can be also 'denied' or 'prompt'",
                ],
            ],
            parameters: [
                {
                    name: 'descriptor',
                    type: 'object',
                    description:
                        'Each powerful feature has one or more aspects that websites can request permission to access. To describe these aspects, each feature defines a subtype of PermissionDescriptor to be its permission descriptor type. __Note:__ this feature has not landed in all browsers yet.',
                    required: true,
                },
                {
                    name: 'state',
                    type: 'string',
                    description:
                        'Determines whether permission is granted, denied or prompted.',
                    required: true,
                },
                {
                    name: 'oneRealm',
                    type: 'boolean',
                    description:
                        'Whether or not to apply permissions to all execution contexts.',
                    required: false,
                },
            ],
        },
    },
    '/session/:sessionId/reporting/generate_test_report': {
        POST: {
            command: 'generateTestReport',
            description:
                'Generates a report for testing. Extension for [Reporting API](https://developers.google.com/web/updates/2018/09/reportingapi). __Note:__ this feature has not landed in all browsers yet.',
            ref: 'https://w3c.github.io/reporting/#automation',
            parameters: [
                {
                    name: 'message',
                    type: 'string',
                    description: 'Message to be displayed in the report.',
                    required: true,
                },
                {
                    name: 'group',
                    type: 'string',
                    description:
                        'Specifies the endpoint group to deliver the report to.',
                },
            ],
        },
    },
    '/session/:sessionId/sensor': {
        POST: {
            command: 'createMockSensor',
            description:
                'Creates a mock sensor to emulate sensors like Ambient Light Sensor. __Note:__ this feature has not landed in all browsers yet.',
            ref: 'https://w3c.github.io/sensors/#create-mock-sensor-command',
            parameters: [
                {
                    name: 'mockSensorType',
                    type: 'string',
                    description:
                        "Type of sensor API to mock, e.g. 'ambient-light'",
                    required: true,
                },
                {
                    name: 'maxSamplingFrequency',
                    type: 'number',
                    description:
                        'A double representing frequency in Hz that is used to set maximum supported sampling frequency for the associated mock sensor.',
                },
                {
                    name: 'minSamplingFrequency',
                    type: 'number',
                    description:
                        'A double representing frequency in Hz that is used to set minimum supported sampling frequency for the associated mock sensor.',
                },
            ],
        },
    },
    '/session/:sessionId/sensor/:type': {
        GET: {
            command: 'getMockSensor',
            description:
                'Retrieves information about a given type of mock sensor. __Note:__ this feature has not landed in all browsers yet.',
            ref: 'https://w3c.github.io/sensors/#get-mock-sensor-command',
            variables: [
                {
                    name: 'type',
                    description:
                        'Mock sensor type to retrieve information from.',
                },
            ],
            parameters: [],
            returns: {
                type: 'object',
                name: 'sensorReading',
                description: 'Values of the mock sensor reading.',
            },
        },
        POST: {
            command: 'updateMockSensor',
            description:
                'Updates the mock sensor type. __Note:__ this feature has not landed in all browsers yet.',
            ref: 'https://w3c.github.io/sensors/#update-mock-sensor-reading-command',
            variables: [
                {
                    name: 'type',
                    description: 'Mock sensor type to update information for.',
                },
            ],
            parameters: [
                {
                    name: 'mockSensorType',
                    type: 'string',
                    description:
                        "Type of sensor API to mock, e.g. 'ambient-light'",
                    required: true,
                },
                {
                    name: 'maxSamplingFrequency',
                    type: 'number',
                    description:
                        'A double representing frequency in Hz that is used to set maximum supported sampling frequency for the associated mock sensor.',
                },
                {
                    name: 'minSamplingFrequency',
                    type: 'number',
                    description:
                        'A double representing frequency in Hz that is used to set minimum supported sampling frequency for the associated mock sensor.',
                },
            ],
        },
        DELETE: {
            command: 'deleteMockSensor',
            description:
                'The Delete Session command closes any top-level browsing contexts associated with the current session, terminates the connection, and finally closes the current session. __Note:__ this feature has not landed in all browsers yet.',
            ref: 'https://w3c.github.io/sensors/#delete-mock-sensor-command',
            variables: [
                {
                    name: 'type',
                    description: 'Mock sensor type to delete.',
                },
            ],
            parameters: [],
        },
    },
    '/session/:sessionId/time_zone': {
        POST: {
            command: 'setTimeZone',
            description:
                'Simulates the changing of a time zone for the purposes of testing. __Note:__ this feature has not landed in all browsers yet.',
            ref: 'https://w3c.github.io/sensors/#create-mock-sensor-command',
            parameters: [
                {
                    name: 'time_zone',
                    type: 'string',
                    description: 'Name of the timezone, e.g. Asia/Tokyo',
                    required: true,
                },
            ],
        },
    },
    '/session/:sessionId/webauthn/authenticator': {
        POST: {
            command: 'addVirtualAuthenticator',
            description:
                'Creates a software [Virtual Authenticator](https://www.w3.org/TR/webauthn-2/#virtual-authenticators).',
            ref: 'https://www.w3.org/TR/webauthn-2/#sctn-automation-add-virtual-authenticator',
            parameters: [
                {
                    name: 'protocol',
                    type: 'string',
                    description:
                        "Valid values: 'ctap1/u2f', 'ctap2', 'ctap2_1'",
                    required: false,
                },
                {
                    name: 'transport',
                    type: 'string',
                    description:
                        "Valid values: 'usb', 'nfc', 'ble' or 'internal'",
                    required: false,
                },
                {
                    name: 'hasResidentKey',
                    type: 'boolean',
                    description: '',
                    required: false,
                },
                {
                    name: 'hasUserVerification',
                    type: 'boolean',
                    description: '',
                    required: false,
                },
                {
                    name: 'isUserConsenting',
                    type: 'boolean',
                    description: '',
                    required: false,
                },
                {
                    name: 'isUserVerified',
                    type: 'boolean',
                    description: '',
                    required: false,
                },
                {
                    name: 'extensions',
                    type: 'string[]',
                    description: '',
                    required: false,
                },
                {
                    name: 'uvm',
                    type: 'object[]',
                    description: '',
                    required: false,
                },
            ],
        },
    },
    '/session/:sessionId/webauthn/authenticator/:authenticatorId': {
        DELETE: {
            command: 'removeVirtualAuthenticator',
            description: 'Removes a previously created Virtual Authenticator.',
            ref: 'https://www.w3.org/TR/webauthn-2/#sctn-automation-remove-virtual-authenticator',
            variables: [
                {
                    name: 'authenticatorId',
                    description: 'id of authenticator',
                },
            ],
            parameters: [],
        },
    },
    '/session/:sessionId/webauthn/authenticator/:authenticatorId/credential': {
        POST: {
            command: 'addCredential',
            description:
                'Injects a Public Key Credential Source into an existing Virtual Authenticator.',
            ref: 'https://www.w3.org/TR/webauthn-2/#sctn-automation-add-credential',
            parameters: [
                {
                    name: 'credentialId',
                    type: 'string',
                    description:
                        'The Credential ID encoded using Base64url Encoding.',
                    required: true,
                },
                {
                    name: 'isResidentCredential',
                    type: 'boolean',
                    description:
                        'If set to true, a client-side discoverable credential is created. If set to false, a server-side credential is created instead.',
                    required: true,
                },
                {
                    name: 'rpId',
                    type: 'string',
                    description:
                        'The Relying Party ID the credential is scoped to.',
                    required: true,
                },
                {
                    name: 'privateKey',
                    type: 'string',
                    description:
                        'An asymmetric key package containing a single private key per [RFC5958], encoded using Base64url Encoding.',
                    required: true,
                },
                {
                    name: 'userHandle',
                    type: 'string',
                    description:
                        'The userHandle associated to the credential encoded using Base64url Encoding. This property may not be defined.',
                    required: true,
                },
                {
                    name: 'signCount',
                    type: 'number',
                    description:
                        'The initial value for a signature counter associated to the public key credential source.',
                    required: true,
                },
                {
                    name: 'largeBlob',
                    type: 'string',
                    description:
                        'The large, per-credential blob associated to the public key credential source, encoded using Base64url Encoding. This property may not be defined.',
                    required: true,
                },
            ],
        },
    },
    '/session/:sessionId/webauthn/authenticator/:authenticatorId/credentials': {
        GET: {
            command: 'getCredentials',
            description:
                'Returns one Credential Parameters object for every Public Key Credential Source stored in a Virtual Authenticator, regardless of whether they were stored using Add Credential or `navigator.credentials.create()`.',
            ref: 'https://www.w3.org/TR/webauthn-2/#sctn-automation-get-credentials',
            variables: [
                {
                    name: 'authenticatorId',
                    description: 'id of authenticator',
                },
            ],
            parameters: [],
        },
        DELETE: {
            command: 'removeAllCredentials',
            description:
                'Removes all Public Key Credential Sources stored on a Virtual Authenticator.',
            ref: 'https://www.w3.org/TR/webauthn-2/#sctn-automation-remove-all-credentials',
            variables: [
                {
                    name: 'authenticatorId',
                    description: 'id of authenticator',
                },
            ],
            parameters: [],
        },
    },
    '/session/:sessionId/webauthn/authenticator/:authenticatorId/credentials/:credentialId':
        {
            DELETE: {
                command: 'removeCredential',
                description:
                    'Removes a Public Key Credential Source stored on a Virtual Authenticator.',
                ref: 'https://www.w3.org/TR/webauthn-2/#sctn-automation-remove-credential',
                variables: [
                    {
                        name: 'authenticatorId',
                        description: 'id of authenticator',
                    },
                    {
                        name: 'credentialId',
                        description: 'id of credential',
                    },
                ],
                parameters: [],
            },
        },
    '/session/:sessionId/webauthn/authenticator/:authenticatorId/credentials/:credentialId/uv':
        {
            POST: {
                command: 'setUserVerified',
                description:
                    'The Set User Verified extension command sets the isUserVerified property on the Virtual Authenticator.',
                ref: 'https://www.w3.org/TR/webauthn-2/#sctn-automation-set-user-verified',
                variables: [
                    {
                        name: 'authenticatorId',
                        description: 'id of authenticator',
                    },
                    {
                        name: 'credentialId',
                        description: 'id of credential',
                    },
                ],
                parameters: [],
            },
        },
}
