const config = require('config');

module.exports = {
    // gridUrl: 'http://localhost:9515',
    sets: {
        client: {
            files: 'tests',
            browsers: ['clientChrome']
        },
        // admin: {
        //     files: 'tests',
        //     browsers: ['adminChrome']
        // }
    },
    // retry: 1,
    // sessionsPerBrowser: 5,
    browsers: {
        clientChrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            baseUrl: config.get('hosts.client'),
            screenshotPath: 'debug/client'
        },
        adminChrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            baseUrl: config.get('hosts.admin'),
            screenshotPath: 'debug/admin'
        }
    }
};
