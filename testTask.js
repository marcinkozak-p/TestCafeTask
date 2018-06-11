import Page from './duck-page-model'
import BangsPage from './bangs-page-model'
import {ClientFunction} from "testcafe";

fixture `The test task`
    .page(`https://duckduckgo.com/`);

const page = new Page();
const getWindowLocation = ClientFunction(() => window.location);

test ('Success scenario', async t =>{
    await t
        .resizeWindow(1080,800)
        .expect(page.logo).ok()
        .expect(page.searchForm.exists).ok();
        if(await page.pluginPromtClosing.exists){
            await t.click(page.pluginPromtClosing)
        }
    await t
        .click(page.privacySimplified)
        .click(page.bangsOption)
        ;

    const bangPage = new BangsPage();
    const location = await getWindowLocation();
    await t
        .expect(location.href).contains('/bang')
        .typeText(bangPage.searchInput,'Stackoverflow')
        .expect(bangPage.searchResult.count).gt(0)
        .expect(bangPage.expectedSearchResultName.innerText).contains("!stackoverflow")
    ;
});

test ('Failure scenario', async t =>{
    if(await page.pluginPromtClosing.exists){
        await t.click(page.pluginPromtClosing)
    }
    await t
        .expect(page.logo).ok()
        .expect(page.searchForm.exists).ok()
        .typeText(page.searchFormInput, 'what is the ultimate question of life the universe and everything')
        .click(page.searchFormButton)
        .resizeWindow(1400, 900)
        .expect(page.searchResultBody.filter(b=>b.textContent.indexOf('42')<0).textContent).ok()
        .expect(page.searchResultBody.filter(b=>b.textContent.indexOf('a')<0).textContent).ok();
});