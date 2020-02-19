import { browser, by, element } from 'protractor';

export class ChaussurePage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('app-root .content span')).getText() as Promise<string>;
    }
}
