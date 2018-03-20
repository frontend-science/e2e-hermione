const assert = require('chai').assert;
const config = require('config');
const url = config.get('urls.client');
const pageObject = require('../../pages/todo');

describe('Page loaded', function() {
    it('should have title', function() {
        return this.browser
            .url(url.root)

            // wait for page load
            .waitForVisible(pageObject.mainInput, config.timeouts.waitForShow)

            .getText(pageObject.mainHeader)
            .then(function(text) {
                assert.equal(text, 'todos')
            });
    });

    it('should have example type title', function() {
        return this.browser
            .url(url.root)
            .getText(pageObject.exampleType)
            .then(function(text) {
                assert.equal(text, 'JavaScript')
            });
    });
});

