// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'

Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
    });

/*this custom commands used to select date which cannot type
 calenderElement : elemnt of the calender
 dateValue : date which needed to select
 */
 Cypress.Commands.add('selectDate', (calenderElement, dateValue) => { 

    let splitValues = dateValue.split(" ")
    let day = splitValues[0]
    let month = splitValues[1]
    let year = splitValues[2]
    
   
    cy.get(calenderElement).click()
    cy.wait(1000)
    cy.get('.react-datepicker__month-select').select(month)
    cy.wait(1000)
    cy.get('.react-datepicker__year-select').select(year)
    cy.wait(1000)
    cy.xpath('//div[contains(@class, "react-datepicker__day") and contains(text(), "'+day+'")]').click()
    cy.wait(1000)
    // cy.get(calenderElement).should('have.value', dateValue)

 });

  /*this custom commands used to select multiple values from dropdown which <select> tag is not available
 inputElement : element which we used to type the text
 listElement : Suggestion list
 values : List of value which needed to test
 */
 Cypress.Commands.add('selectMultipleValuesFromDropdown', (inputElement, listElement, values) => { 
    for (let i = 0; i < values.length; i++) {
            
        cy.get(inputElement).type(values[i])
        cy.xpath(listElement).each(function ($ele, index, $list) {
            if ($ele.text().includes(values[i])) {
                cy.wrap($ele).click()
            }
            else {
                cy.log($ele.text())
            }
        })
    }

 })