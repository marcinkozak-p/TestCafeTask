import { Selector } from 'testcafe';
export default class Page {
    constructor(){
        this.searchInput = Selector(".frm__input.js-bang-search");
        this.searchResult = Selector(".bang__result.js-bang-result");
        this.expectedSearchResultName = Selector(".bang__result__bang-name");
    }
}