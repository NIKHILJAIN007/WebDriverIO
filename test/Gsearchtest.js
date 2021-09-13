const { assert } = require('console');
const expectChai = require('chai').expect;
const Googlehomepage = require('../pages/Googlehomepage.js')

describe('My Google application', () => {
    it('Web Page Title', async () => {
        browser.url(`${browser.options.baseUrl}`);
       // browser.url('http://google.com');
        var title = await browser.getTitle();
        console.log('Home Page Title' +title);
    });

    it('Search text with random text on Google', async () => {
        await Googlehomepage.search_text('WebDriver IO');
    });

    it('Verify Landing Page Title After Searching', async () => {
        await browser.getTitle();
        expect(browser).toHaveTitle('WebDriverIO - Google Search');
        browser.pause(2000);
    });

});