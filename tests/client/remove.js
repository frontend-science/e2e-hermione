const assert = require('chai').assert;
const config = require('config');
const url = config.get('urls.client');
const pageObject = require('../../pages/todo');

describe('Remove items', function() {
    beforeEach(function (done) {
        return this.browser
            .url(url.root)
            .localStorage('POST', { key: 'todos-vanillajs', value: '{"todos":[]}' })
            .setValue(pageObject.mainInput, 'Clean up the room')
            .click(pageObject.mainHeader)
            .setValue(pageObject.mainInput, 'Check email')
            .click(pageObject.mainHeader)
            .then(function() {
                done();
            })
    });

    it('should remove item', function() {
        return this.browser
            .click(pageObject.labelOfFirstItem)
            .click(pageObject.destroyFirstItem)
            .getText(pageObject.labelOfFirstItem)
            .then(function(text) {
                assert.equal(text, 'Check email')
            });
    });

    it('should update counter after removing todo', function() {
        return this.browser
            .click(pageObject.labelOfFirstItem)
            .click(pageObject.destroyFirstItem)
            .getText(pageObject.counterNumber)
            .then(function(text) {
                assert.equal(text, '1')
            });
    });
});

