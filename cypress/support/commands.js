//Go to Customer command
Cypress.Commands.add('goToSignUp', () => {
    cy.xpath('//*[@id="navbarSupportedContent"]/div[2]/ul/li[4]/a', { timeout: 10000 }).should('be.visible').click()
    cy.wait(2000)
    cy.xpath('//*[@id="navbarSupportedContent"]/div[2]/ul/li[4]/ul/li[2]/a', { timeout: 10000 }).should('be.visible').click()
    cy.wait(3000)
})

//Signup command
Cypress.Commands.add('signup', (firstName, lastName, countryName, phone, email, password) => {
    cy.xpath('//*[@id="firstname"]', { timeout: 10000 }).should('be.visible').clear().type(firstName)
    cy.wait(2000)
    cy.xpath('//*[@id="last_name"]', { timeout: 10000 }).should('be.visible').clear().type(lastName)
    cy.wait(2000)
    cy.xpath('//*[@id="signup"]/div/div/div/div[3]/div[1]/div/div/button/div/div/div', { timeout: 10000 }).should('be.visible').click()          // Open dropdown
    cy.wait(2000)
    cy.xpath('//*[@id="signup"]/div/div/div/div[3]/div[1]/div/div/div/div[1]/input', { timeout: 10000 }).should('be.visible').type(countryName)  //Type country
    cy.wait(2000)
    cy.contains('span.text', countryName, { timeout: 10000 }).scrollIntoView().click()    //Click the exact option
    cy.wait(2000)
    cy.xpath('//*[@id="phone"]', { timeout: 10000 }).should('be.visible').clear().type(phone)
    cy.wait(2000)
    cy.xpath('//*[@id="user_email"]', { timeout: 10000 }).should('be.visible').clear().type(email)
    cy.wait(2000)
    cy.xpath('//*[@id="password"]', { timeout: 10000 }).should('be.visible').clear().type(password)
    cy.wait(2000)
})

//Go to Customer command
Cypress.Commands.add('goToLogin', () => {
    cy.xpath('//*[@id="navbarSupportedContent"]/div[2]/ul/li[4]/a', { timeout: 10000 }).should('be.visible').click()
    cy.wait(2000)
    cy.xpath('//*[@id="navbarSupportedContent"]/div[2]/ul/li[4]/ul/li[1]/a', { timeout: 10000 }).should('be.visible').click()
    cy.wait(3000)
})

//Login Command
Cypress.Commands.add('loginform', (email, password) => {
    cy.xpath('//*[@id="email"]', { timeout: 10000 }).should('be.visible').clear().type(email)
    cy.wait(2000)
    cy.xpath('//*[@id="password"]', { timeout: 10000 }).should('be.visible').clear().type(password)
    cy.wait(2000)
    cy.xpath('//*[@id="submitBTN"]', { timeout: 10000 }).should('be.visible').click()
    cy.wait(2000)
})