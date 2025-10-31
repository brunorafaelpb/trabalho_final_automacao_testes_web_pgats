class Menu {
    navigateToContectUs() {
        cy.get('a[href="/contact_us"]').click()
    }

    navigateToProducts() {
        cy.get('a[href="/products"]').click()
    }
}

export default new Menu()