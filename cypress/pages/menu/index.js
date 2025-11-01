class Menu {
    navigateToContectUs() {
        cy.get('a[href="/contact_us"]').click()
    }

    navigateToProducts() {
        cy.get('a[href="/products"]').click()
    }

    navigateToCart() {
        cy.get('.navbar-nav > li > a[href="/view_cart"]').click();
    }
}

export default new Menu()