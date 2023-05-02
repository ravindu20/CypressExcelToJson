// const xlsx = require('xlsx');

function getDataFromHtmlWatchlistIntoJson() {
  const XLSX = require("xlsx");
  // Pfad zur Excel-Datei
  const filePath = "D:\\Tutorials\\Cypress\\Cypress-datadriven-main\\Cypress-datadriven-main\\ReadExcel-Cypress\\cypress\\fixtures\\data1.xlsx";
  // Lesen der Excel-Datei
  const workbook = XLSX.readFile(filePath);
  // Erste Arbeitsmappe auswählen
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
 
  // Konvertieren der Arbeitsmappe in JSON
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  // Ausgabe der Daten auf der Konsole
  console.log(jsonData);
}

describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://example.cypress.io')
    // const workbook = xlsx.readFile('D:\\Tutorials\\Cypress\\excelToJsonConverter\\cypress\\fixtures\\data.xlsx');

    // const sheetName = workbook.SheetNames[0];
    // const worksheet = workbook.Sheets[sheetName];
    // const jsonData = xlsx.utils.sheet_to_json(worksheet);
    // cy.log(jsonData)

    getDataFromHtmlWatchlistIntoJson();

  })
})