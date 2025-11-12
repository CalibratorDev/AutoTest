import { $, browser } from '@wdio/globals'
import Page from './page.js';

class MenuPage extends Page {
//---------------------------- Menu Button Components ----------------------------//
//-------------------------------------------------------------------------------//
    get menuBtn() {
        return $('button#react-burger-menu-btn');
    }
    get menuImg() {
        return $('img.bm-icon');
    }
//---------------------------- Close Menu Button Components ----------------------------//
//-------------------------------------------------------------------------------------//
    get closeBtn() {
        return $('button#react-burger-cross-btn');
    }
    get closeImg() {
        return $('img.bm-cross'); 
    }
// ---------------------------- All Items Button Components ----------------------------//
//------------------------------------------------------------------------------------//
    get allItemsBtn() {
        return $('#inventory_sidebar_link');
    }
//---------------------------- About Button Components ----------------------------//
//--------------------------------------------------------------------------------//
    get aboutBtn() {
        return $('#about_sidebar_link');
    }
//---------------------------- Logout Button Components ----------------------------//
//---------------------------------------------------------------------------------//
    get logoutBtn() {
        return $('#logout_sidebar_link');
    }
//---------------------------- Shopping Cart Button Components ----------------------------//
//----------------------------------------------------------------------------------------//
    get cartBtn() {
        return $('a.shopping_cart_link');
    }
//---------------------------- Continue Shopping Button Components ----------------------------//
//--------------------------------------------------------------------------------------------//
    get continueBtn() {
        return $('#continue-shopping');
    }
//---------------------------- Checkout Button Components ----------------------------//
//-----------------------------------------------------------------------------------//
    get checkoutBtn() {
        return $('#checkout');
    }
//---------------------------- Add Backpack Button Components ----------------------------//
//---------------------------------------------------------------------------------------//
    get addToCartBackpackBtn() {
        return $('button#add-to-cart-sauce-labs-backpack');
    }
//---------------------------- Add Bike Light Button Components ----------------------------//
//-----------------------------------------------------------------------------------------//
    get addToCartBikeLightBtn() {
        return $('button#add-to-cart-sauce-labs-bike-light');
    }
//---------------------------- Remove from Cart Button Components ----------------------------//
//-------------------------------------------------------------------------------------------//
    get removeBackpackBtn() {
        return $('#remove-sauce-labs-backpack');
    }
//---------------------------- Cart Badge Button Components ----------------------------//
//-------------------------------------------------------------------------------------//
    get cartBadge() {
        return $('.shopping_cart_badge');
    }
//---------------------------- Reset App Button Components ----------------------------//
//------------------------------------------------------------------------------------//
    get resetAppBtn() {
        return $('a#reset_sidebar_link')
    }
//---------------------------- Grab About Link Components ----------------------------//
//------------------------------------------------------------------------------------//
    get aboutLink() {
        return $('a[href="https://saucelabs.com/"]')
    }

//----------00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000----------//

//---------------------------- Open Menu Button Funcitons ----------------------------//
//-----------------------------------------------------------------------------------//
    async openMenu() {
        await expect(this.menuImg).toBePresent()
        await this.menuBtn.click();
    }
//---------------------------- Close Menu Button Functions ----------------------------//
//------------------------------------------------------------------------------------//
    async closeMenu() {
        await expect(this.closeImg).toBePresent()
        await this.closeBtn.click();
    }
//---------------------------- Open Cart Functions ----------------------------//
//----------------------------------------------------------------------------//
    async openCart() {
        await expect(this.cartBtn).toBePresent()
        await this.cartBtn.click();
    }
//---------------------------- Open Products Page Functions ----------------------------//
//-------------------------------------------------------------------------------------//
    async openProducts() {
        await expect(this.allItemsBtn).toBePresent()
        await this.allItemsBtn.click();
    }
//---------------------------- Click Logout Button Functions ----------------------------//
//--------------------------------------------------------------------------------------//
    async clickLogout() {
        await expect(this.logoutBtn).toBePresent()
        await this.logoutBtnBtn.click();
    }
//---------------------------- Click About Button Functions ----------------------------//
//-------------------------------------------------------------------------------------//
    async clickAbout() {
        await expect(this.aboutBtn).toBePresent()
        await this.aboutBtn.click();
    }
//---------------------------- Continue Shopping Button Functions ----------------------------//
//-------------------------------------------------------------------------------------------//
    async clickContShop() {
        await expect(this.continueBtn).toBePresent()
        await this.continueBtn.click();
    }
//---------------------------- Checkout Button Functions ----------------------------//
//----------------------------------------------------------------------------------//
    async checkout() {
        await expect(this.checkoutBtn).toBePresent()
        await this.checkoutBtn.click();
    }
//---------------------------- Add Backpack to Cart Functions ----------------------------//
//---------------------------------------------------------------------------------------//
    async addToCartBackpack() {
        await expect(this.addToCartBackpackBtn).toBePresent()
        await this.addToCartBackpackBtn.click();
        await expect(this.cartBadge).toBePresent()
    }
//---------------------------- Add Bike Light to Cart Functions ----------------------------//
//-----------------------------------------------------------------------------------------//
    async addToCartBikeLight() {
        await expect(this.addToCartBikeLightBtn).toBePresent()
        await this.addToCartBikeLightBtn.click();
        await expect(this.cartBadge).toBePresent()
    }
//---------------------------- Remove from Cart Button Functions ----------------------------//
//------------------------------------------------------------------------------------------//
    async removeFromCart() {
        await expect(this.removeBackpackBtn).toBePresent()
        await this.removeBackpackBtn.click();
    }

//----------00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000----------//

//                        LF = Large Function                        //

//---------------------------- About LF ----------------------------//
//-----------------------------------------------------------------//
    async workAbout() {
        await this.openMenu();
        await expect(this.aboutLink).toBeExisting()
    }
//---------------------------- Reset App State LF ----------------------------//
//---------------------------------------------------------------------------//
    async workReset() {
        await this.addToCartBackpack();
        await this.addToCartBikeLight();
        await expect(this.cartBadge).toBePresent()
        await this.openMenu();
        await this.resetAppBtn.click();
        await this.closeMenu();
    }
//---------------------------- Work a Few Cart Functions LF ----------------------------//
//-------------------------------------------------------------------------------------//
    async workCart() {
        await this.openCart();
        await this.clickContShop();
        await this.openCart();
        await this.checkout();
        await this.openCart();
        await this.clickContShop();
        await this.workReset();
    }
}

export default new MenuPage();
