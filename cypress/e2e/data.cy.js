/// <reference types="Cypress" />
import {formPage} from './FormsPage'

const form_Page = new formPage()

let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
  before(() => {
     cy.task('readXlsx', { file: 'cypress/fixtures/data.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
      })
      
      })
    it ('Data Driven: Register User', () => {
      cy.fixture('xlsxData').then((data) => {
         for ( let i = 0; i < rowsLength; i++) {
          cy.visit('https://demoqa.com/automation-practice-form')
          // cy.get('#firstName').type(data.rows[i].firstName);
          // cy.get('#lastName').type(data.rows[i].lastName);
          form_Page.fillForms(data.rows[i].firstName, data.rows[i].lastName, data.rows[i].email,
            data.rows[i].telephone, data.rows[i].subject, data.rows[i].dob, data.rows[i].current_address, data.rows[i].photoPath)
         
        }
      })     
     })
    })

