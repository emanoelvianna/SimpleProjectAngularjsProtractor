exports.config = {
    multiCapabilities: [{
        'browserName': 'chrome'
    }],
    directConnect: true,
    specs: ['test/*.js'],

    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000
    },
};