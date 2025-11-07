import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import MenuPage from '../pageobjects/hamburger.menu.js'

describe('Logging in to test the four menu options', () => {
    it(`once logged in, open the menu, then go through all four options`, async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await MenuPage.workReset()
    })

})

