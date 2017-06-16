const assert = require('chai').assert;
const config = require('config');
const url = config.get('urls.client');

describe('Page loaded', function() {
    it('should have title', function() {
        return this.browser
            .url(url.root)
            .getText('.header h1')
            .then(function(text) {
                assert.equal(text, 'todos')
            });
    });

    it('should have example type title', function() {
        return this.browser
            .url(url.root)
            .getText('.source-links h5')
            .then(function(text) {
                assert.equal(text, 'Vanilla JavaScript Example')
            });
    });
});

describe('New todo input', function() {
    it('should have input with placeholder', function() {
        return this.browser
            .url(url.root)
            .getAttribute('.new-todo', 'placeholder')
            .then(function(text) {
                assert.equal(text, 'What needs to be done?')
            });
    });
});

describe('Add new todo', function() {
    beforeEach(function (done) {
        return this.browser
            .url(url.root)
            .localStorage('DELETE', { key: 'todos-vanillajs' })
            .then(function() {
                done();
            })
    });

    it('should add new todo', function() {
        return this.browser
            .url(url.root)
            .setValue('.new-todo', 'Clean up the room')
            .keys('Enter')
            // .saveScreenshot('./debug/client/debug.png')
            .getText('.todo-list li:nth-child(1) .view label')
            .then(function(text) {
                assert.equal(text, 'Clean up the room')
            });
    });

    it('should update counter after adding new todo', function() {
        return this.browser
            .url(url.root)
            .setValue('.new-todo','Clean up the room')
            .keys('Enter')
            .setValue('.new-todo','Check email')
            .keys('Enter')
            .getText('.todo-count strong')
            .then(function(text) {
                assert.equal(text, '2')
            });
    });

});

