import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import MenuPage from '../pageobjects/hamburger.menu.js'

describe('Loginging in to use the Hamburger Menu', () => {
    it(`once logged in, open the cart, then click "Continue Shopping" and go back to the products page`, async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await MenuPage.openCart()
        await browser.pause(2000)
        await MenuPage.clickContShop()
        await browser.pause(2000)
    })

    it(`once logged in, open the cart, then click "Checkout"`, async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await MenuPage.openCart()
        await browser.pause(2000)
        await MenuPage.checkout()
        await browser.pause(2000)
    })

    it(`once logged, add an item to the cart, then remove it in the cart page`, async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await MenuPage.addToCart()
        await browser.pause(2000)
        await MenuPage.openCart()
        await browser.pause(2000)
        await MenuPage.removeFromCart()
        await browser.pause(2000)
   
    })
})

