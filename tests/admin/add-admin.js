const assert = require('chai').assert;
const config = require('config');
const url = config.get('urls.client');
const pageObject = require('../../pages/todo');

const texts = require('../../l10n/en');

describe('[ADMIN] New todo input', function() {
    it('should have input with placeholder', function() {
        return this.browser
            .url(url.root)
            .getAttribute(pageObject.mainInput, 'placeholder')
            .then(function(text) {
                assert.equal(text, texts.inputPlaceHolder)
            });
    });
});

describe('[ADMIN] Add new todo', function() {
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
            .setValue(pageObject.mainInput, texts.todoLine1)
            .keys('Enter')
            // .saveScreenshot('./debug/client/debug.png')
            .getText(pageObject.labelOfFirstItem)
            .then(function(text) {
                assert.equal(text, texts.todoLine1)
            });
    });

    it('should update counter after adding new todo', function() {
        return this.browser
            .url(url.root)
            .setValue(pageObject.mainInput, texts.todoLine1)
            .keys('Enter')
            .setValue(pageObject.mainInput, texts.todoLine2)
            .keys('Enter')
            .getText(pageObject.counterNumber)
            .then(function(text) {
                assert.equal(text, '2')
            });
    });
});

