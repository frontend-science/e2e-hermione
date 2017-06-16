const assert = require('chai').assert;
const config = require('config');
const url = config.get('urls.client');
const pageObject = require('../pages/todo');

describe('New todo input', function() {
    it('should have input with placeholder', function() {
        return this.browser
            .url(url.root)
            .getAttribute(pageObject.mainInput, 'placeholder')
            .then(function(text) {
                assert.equal(text, 'What needs to be done?')
            });
    });
});

describe('Add new todo', function() {
    beforeEach(function (done) {
        return this.browser
            .url(url.root)
            .localStorage('POST', { key: 'todos-vanillajs', value: '{"todos":[]}' })
            .then(function() {
                done();
            })
    });

    it('should add new todo', function() {
        return this.browser
            .url(url.root)
            .setValue(pageObject.mainInput, 'Clean up the room')
            .keys('Enter')
            // .saveScreenshot('./debug/client/debug.png')
            .getText(pageObject.labelOfFirstItem)
            .then(function(text) {
                assert.equal(text, 'Clean up the room')
            });
    });

    it('should update counter after adding new todo', function() {
        return this.browser
            .url(url.root)
            .setValue(pageObject.mainInput, 'Clean up the room')
            .keys('Enter')
            .setValue(pageObject.mainInput, 'Check email')
            .keys('Enter')
            .getText(pageObject.counterNumber)
            .then(function(text) {
                assert.equal(text, '2')
            });
    });
});

