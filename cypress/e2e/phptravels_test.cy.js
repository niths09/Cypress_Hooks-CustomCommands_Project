describe('PHP Travels Customer Login & Signup Tests', () => {
  
  //Runs ONE TIME before all tests
  before(() => {
    cy.log('Starting a new test')
  })

  //Runs BEFORE EVERY test
  beforeEach(() => {
    cy.visit('https://phptravels.net/')
    cy.wait(3000)
  })

  //TEST CASE 1: SIGNUP
  it('Signup a new user (manual CAPTCHA required)', () => {
    
    //Open customer dropdown and click to signup
    cy.goToSignUp()

    //Fill the signup form
    cy.signup('Nithu', 'Lakshmi', 'India', '8136859548', 'nithulakshmi8@gmail.com', 'Password@123!')

    //Pause here to manually solve CAPTCHA
    cy.pause()

    //Click signup button after CAPTCHA is solved
    cy.xpath('//*[@id="submitBTN"]', { timeout: 10000 }).should('be.visible').should('not.be.disabled').click()  //button becomes active only after CAPTCHA
    cy.wait(3000)

    //Verify successful signup message
    cy.contains('Your account has been created').should('be.visible')
  })

  //TEST CASE 2: LOGIN
  it('Login with valid credentials', () => {
    
    // Open customer dropdown and click to login
    cy.goToLogin()

    //Fill in login form
    cy.loginform('john@nithulakshmi8.com', 'Password')
  })

  //Runs AFTER EVERY test
  afterEach(() => {
    cy.log('Test finished.')
  })

  //Runs ONE TIME after all tests
  after(() => {
      cy.log('All tests completed.')
  })
})