import { Utils } from '../../support/utils';
class GeneralSettings {

    instance = 0;

    setInstance(instance) {
        this.instance = instance;
    }

    expandablesBlock() {
        return cy.get('div[class="gh-setting flex-column"] span');
    }

    clickSpecificExpandablesBlock(elementToSearch) {
        this.expandablesBlock().each(($title) => {
            if ($title.text().trim().includes(elementToSearch)) {
                cy.wrap($title).within(() => {
                    cy.get('button.gh-btn').click({ force: true });
                })
            }
        });
    }

    twitterTitle() {
        return cy.get('#twitterTitle');
    }

    twitterDescription() {
        return cy.get('#twitterDescription');
    }

    submitSaveButton() {
        return cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    }

    open() {
        Utils.navigate('#/settings/general');        
    }

    editTimeCardTwiter(title, description, emailLogin, escenario) {
        this.open();
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.clickSpecificExpandablesBlock('Twitter card');
        this.twitterTitle().clear().type(title, { force: true });
        this.twitterDescription().clear().type(description, { force: true });
        Utils.delay();
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.submitSaveButton().click({ force: true });
        Utils.delay(1000);
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
        
        this.submitSaveButton();
        Utils.delay(1000);
        cy.reload()
        Utils.delay(3000);
        this.clickSpecificExpandablesBlock('Twitter card');
        Utils.delay(1000);
        Utils.takeScreenshot(emailLogin, escenario, "Paso_"+Utils.pruebaID());
    }
}
export default GeneralSettings;