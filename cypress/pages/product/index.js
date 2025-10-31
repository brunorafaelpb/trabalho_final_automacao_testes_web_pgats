class Product {
    clickFirstProduct(){
        cy.get('a[href="/product_details/1"]').click()
    }

    checkAllProductsPage(){
        cy.get('.features_items').should('be.visible')
        cy.get('.title').should('exist').should('contain', 'All Products')
    }

    checkProductDetailsPage(){
        cy.get('.product-information > h2').should('be.visible')
        cy.contains('.product-information > p', 'Category').should('be.visible')
        cy.get('.product-information > span > span').should('be.visible').and('contain.text', 'Rs.')
        cy.contains('.product-information > p', 'Availability:').should('be.visible')
        cy.contains('.product-information > p', 'Condition:').should('be.visible')
        cy.contains('.product-information > p', 'Brand:').should('be.visible')
    }

}

export default new Product()