const Googlehomepage=require('../pages/Googlehomepage.js')

describe('My Google application', () => {
    it('should search text with random search on Google', async () => {
        browser.url('https://www.google.com/');
        await Googlehomepage.search_text('WebDriverIO');
        browser.pause(5000);
    });
});