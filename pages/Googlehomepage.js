/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Googlehomepage {

    get search_text_box() { return $('//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]') }
    get search_btn() { return $('//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[3]/center[1]/input[1]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to search on goolgle any string
     */
    async search_text(search_text) {
        await this.search_text_box.setValue(search_text);
        await this.search_btn.click();
    }


}

module.exports = new Googlehomepage();