class Home {
    
    subscribe(email){
        cy.get('#susbscribe_email').scrollIntoView().clear().type(email)
        cy.get('#subscribe').click()
    }

    checkHomePage(){
        cy.contains('h1', 'AutomationExercise').should('be.visible')
    }

    checkSubscriptionText(){
        cy.contains('h2', 'Subscription').scrollIntoView().should('be.visible')
    }

    checkSubscriptionSucessMessage(){
        cy.get('#success-subscribe > div').scrollIntoView()
            .should('be.visible')
            .should('have.text', 'You have been successfully subscribed!')
    }
}

export default new Home()