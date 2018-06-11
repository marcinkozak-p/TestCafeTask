import { Selector } from 'testcafe';

export default class BangsPage {
    constructor(){
        this.searchForm = Selector("#search_form_homepage");
        this.searchFormInput = Selector("#search_form_input_homepage");
        this.searchFormButton = Selector("#search_button_homepage");
        this.searchResultBody = Selector(".result__body.links_main.links_deep");
        this.logo = Selector(".logo-wrap--home");
        this.privacySimplified = Selector(".header__clickable");
        this.pluginPromtClosing= Selector(".ddgsi.badge-link__close.js-badge-link-dismiss");
        this.bangsOption = Selector(".showcase__heading").withText("Start Using Bangs");
    }
}