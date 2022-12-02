const delay = 1000;
const siteUrl = "http://localhost:3001/ghost/";
const url = "http://localhost:3001/ghost/#/signin";
const dashboardPage = "http://localhost:3001/ghost/#/site";
const staffPage = "http://localhost:3001/ghost/#/staff";
const memberPage = "http://localhost:3001/ghost/#/members";
const emailLogin = "h.galindos@uniandes.edu.co";
const passwordLogin = "Zl@ifer619";
const newPassword = "Zl@ifer619";

let counter = 0;
export class Utils {
    //Function that generates the attempts randomly
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    //Function that generates the timestamp
    static getCurrentTimestamp() {
        return Math.floor(Date.now() / 1000);
    };

    //Function that delay a seconds
    static delay(delaySeconds) {
        if (delaySeconds != undefined) {
            cy.wait(delaySeconds)
        } else {
            cy.wait(delay)
        }
    };

    //Function that takes a screenshot
    static takeScreenshot(emailLogin, escenario, paso) {
        this.delay();
        //cy.screenshot(`${emailLogin}/${escenario}/${paso}`);
        cy.screenshot(`${paso}`);
        this.delay();
    };

    //Function to get a url
    static navigate(path) {
        cy.visit(`${siteUrl}${path}`)
    }

    //Function that reset step 
    static pruebaID_reset() {
        counter = 0 ;       
        
    };
    //Function that assigns step 
    static pruebaID() {
        counter = counter+1 ;
        return counter;
        
    };

    //Function to get url
    static getUrl() {
        return url;        
    };

    //Function to get email
    static getEmail() {
        return emailLogin;        
    };

    //Function to get password
    static getPassword() {
        return passwordLogin;        
    };

    //Function to get dashboardPage
    static getDashboardPage() {
        return dashboardPage;        
    };

    //Function to get staffPage
    static getStaffPage() {
        return staffPage;        
    };

    //Function to get newPassword
    static getNewPassword() {
        return newPassword;        
    };

    //Function to get memberPage
    static getMemberPage() {
        return memberPage;        
    };

}