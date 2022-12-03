
import {faker} from "@faker-js/faker"

describe('Ghost under monkeys', function() {
    it('login', ()=>{
        cy.visit('http://localhost:2369/ghost/#/signin');
        cy.wait(1000);
        cy.get('form').within(() => {            
            cy.get('input[name="identification"]').type('jm.carrillo@uniandes.edu.co')
            cy.get('input[name="password"]').type('Jorge.2020')
            cy.get('button[type="submit"]').click()
        })
        cy.wait(2000);
        randomEvent(5);
    })    
 
})

function randomEvent(eventosLeft) {       

    var eventosLeft = eventosLeft;
    var eventoID = Math.pow(-1, eventosLeft) + 1; 
    if(eventosLeft > 0) {
        if(eventoID==0){            
            cy.wait(1000);
            randomClickLink(5, 10);            
        }
        else {            
            cy.wait(1000);
            randomClickButton(5, 10);            
        }        
        eventosLeft = eventosLeft -1;        
        randomEvent(eventosLeft);
    }       
}

function randomClickLink(monkeysLeft, maxAttemps) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    var maxAttemps = maxAttemps;            
    if(monkeysLeft > 0 && maxAttemps > 0) {
        cy.get('a').not('.ember-view gh-btn-editor').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true}); 
                cy.wait(1000);
                cy.url().then(url => {
                    const getUrl = url;                                   
                    if(getUrl.includes('#/editor/post') || getUrl.includes('#/editor/page')  || getUrl.includes('#/tags/') || getUrl.includes('#/members/')) {
                        randomLlenarTextArea(3, 5);                                                
                    }
                    else if(getUrl.includes('#/tags/') || getUrl.includes('#/members/')) {
                        randomLlenarInput(1, 5);                        
                    }
                })
                monkeysLeft = monkeysLeft - 1;
                maxAttemps = 10;
            }  
            else {
                maxAttemps--;
            }          
            cy.wait(1000);
            randomClickLink(monkeysLeft, maxAttemps);
        });       
    }   
}

function randomClickButton(monkeysLeft, maxAttemps) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft; 
    var maxAttemps = maxAttemps;   
    if(monkeysLeft > 0 && maxAttemps > 0) {
        cy.get('button').not('[class="gh-nav-btn-search"]').then($button => {
            var randomButton = $button.get(getRandomInt(0, $button.length));
            if(!Cypress.dom.isHidden(randomButton)) {
                cy.wrap(randomButton).click({force: true});
                monkeysLeft = monkeysLeft - 1;
                maxAttemps = 10;
            }
            else {
                maxAttemps--;
            }
            cy.wait(1000);
            randomClickButton(monkeysLeft, maxAttemps);
        });        
    }   
}

function randomLlenarTextArea(monkeysLeft, maxAttemps) {    

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    var maxAttemps = maxAttemps;
    if(monkeysLeft > 0 && maxAttemps > 0) {
        cy.get('textarea').then($input => {
            var randomInput = $input.get(getRandomInt(0, $input.length));
            if(!Cypress.dom.isHidden(randomInput)) {
                let texto = faker.lorem.words(5);
                cy.wrap(randomInput).type(texto);
                monkeysLeft = monkeysLeft - 1;
                maxAttemps = 10;
            }
            else{
                maxAttemps--;
            }
            cy.wait(1000);
            randomLlenarTextArea(monkeysLeft, maxAttemps);
        });
    }   
}

function randomLlenarInput(monkeysLeft, maxAttemps) {    

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    var maxAttemps = maxAttemps;
    if(monkeysLeft > 0 && maxAttemps > 0) {
        cy.get('input').then($input => {
            var randomInput = $input.get(getRandomInt(0, $input.length));
            if(!Cypress.dom.isHidden(randomInput)) {
                let parrafo = faker.lorem.paragraphs(5);
                cy.wrap(randomInput).type(parrafo);
                monkeysLeft = monkeysLeft - 1;
                maxAttemps = 10;
            }
            else{
                maxAttemps--;
            }
            cy.wait(1000);
            randomLlenarInput(monkeysLeft, maxAttemps);
        });
    }   
}

