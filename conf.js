exports.config = {
    multiCapabilities: [{
        'browserName': 'chrome'
    }],
    directConnect: true,
    specs: ['test/*.js'],

    jasmineNodeOpts: {
        // Se verdad então exibir.
        isVerbose: true,
        // Sem verdade, printa no terminal.
        showColors: true,
        // Se verdade então incluir.
        includeStackTrace: true,
        // Tempo de espera antes do teste falhar.
        defaultTimeoutInterval: 30000
    },
};