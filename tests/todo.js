const assert = require('chai').assert;
const config = require('config');
const url = config.get('urls.client');
const dataObject = require('../pages/todo');

describe('Page loaded', function() {
    it('should have title', function() {
        return this.browser
            .url(url.root)
            .getText(dataObject.mainHeader)
            .then(function(text) {
                assert.equal(text, 'todos')
            });
    });

    it('should have example type title', function() {
        return this.browser
            .url(url.root)
            .getText(dataObject.exampleType)
            .then(function(text) {
                assert.equal(text, 'Vanilla JavaScript Example')
            });
    });
});

