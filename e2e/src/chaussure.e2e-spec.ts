import { ChaussurePage } from './chaussure.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
    let page: ChaussurePage;
    // tslint:disable-next-line: prefer-const
    let nbLineInit: number;

    beforeEach(() => {
        page = new ChaussurePage();
    });

    it('Je compte le nombre de lignes dans le tableau et je teste la navigation vers mon fichier d ajout', () => {
        element.all(by.css('.lineChaussure')).then(totalRows => {
            this.nbLineInit = totalRows.length;

        });
        element.all(by.css('#buttonAddChaussure'));
    });
    it('J ai bien été redirigé vers l accueil', () => {

    });
    it('Notre tableau contient une ligne de plus', () => {

    });
    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
