
/**
* main page object containing all methods, selectors and functionality of the page
* that is shared across all page objects
*/
class Googlehomepage {

    // { return $('//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]') }
    get search_text_box() {return $('[name="q"]')}
    get search_btn() { return $('[name="btnK"]') }

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