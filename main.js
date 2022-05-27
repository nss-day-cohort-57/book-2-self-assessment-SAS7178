/*
    Remember to use comments to define the algorithm(s) needed
    BEFORE you write any code
*/
//function that will allow to multiply 'monthly expenses' of each obj
// by 12 to get annaul expenses
//purpose srp: get each applicants annaul expenses
//para: method that iterates through applicantsArray
//return: applicant.annual value
const calculateYearlyExpenses = (applicant) => { 
    applicant.annual = applicant.monthlyExpenses * 12  
    return applicant.annual;
}   
//function 
//purpose srp: determine 
//para: aplllicant Object, yearly expenses
//return: percentage of expenses to salary
const calculateExpensesPercentage = (applicant, yearlyExpenses) => {
      const sum = yearlyExpenses/applicant.salary
        const expensesToSalaryPercent = sum * 100
        return expensesToSalaryPercent; 
    }
// function: to test whether the applicant is qualified 
// purpose srp: 
//para:applicant Object, expensesToSalaryPercent
//returns: modified applicant object
const isQualified = (applicant, expensesToSalaryPercent) => {
if (expensesToSalaryPercent < 10){
    applicant.mortgage.qualified = true,
    applicant.mortgage.amount = applicant.salary * 5
} else if (expensesToSalaryPercent > 10) {
    applicant.mortgage.qualified = false,
      applicant.mortgage.amount = 0 }
      return applicant;
 }

const mortgageApplicants = [
    { id: 1, name: "James Runolfsdottir", monthlyExpenses: 343.7, salary: 49938.68, mortgage: {}, address: "866 Weissnat Forks", city: "South Dario" },
    { id: 2, name: "Fannie Swaniawski", monthlyExpenses: 783.82, salary: 119255.48, mortgage: {}, address: "3350 McDermott Bridge", city: "Amaliaborough" },
    { id: 3, name: "Patsy Jaskolski", monthlyExpenses: 803.34, salary: 103376.76, mortgage: {}, address: "585 Kassulke River", city: "New Hattieport" },
    { id: 4, name: "Rufus Moore", monthlyExpenses: 845, salary: 88269.54, mortgage: {}, address: "46332 O'Hara Mountain", city: "North Idell" },
    { id: 5, name: "Philip Abshire", monthlyExpenses: 781.34, salary: 65333.78, mortgage: {}, address: "633 Thiel Ville", city: "Uliseston" },
    { id: 6, name: "Wendy Kiehn", monthlyExpenses: 537.32, salary: 59702.6, mortgage: {}, address: "82441 Mills Turnpike", city: "Port Libbieberg" },
    { id: 7, name: "Ray Lubowitz", monthlyExpenses: 550.15, salary: 181362.87, mortgage: {}, address: "855 Isabel Forge", city: "Hesseltown" },
    { id: 8, name: "Lawrence Hirthe MD", monthlyExpenses: 940.74, salary: 100269.15, mortgage: {}, address: "68459 Jordon Crossing", city: "Boview" },
    { id: 9, name: "Mario Beahan I", monthlyExpenses: 618.11, salary: 122226.79, mortgage: {}, address: "71521 Walter Drive", city: "Rosannaton" },
    { id: 10, name: "Rosa Hauck", monthlyExpenses: 763.82, salary: 89335.68, mortgage: {}, address: "33954 Reba Motorway", city: "Port Lesly" },
    { id: 11, name: "Becky Wiegand", monthlyExpenses: 212.27, salary: 76137.45, mortgage: {}, address: "3972 Stroman Parks", city: "West Clotildeport" },
]

const applicants = () => {
    let qualifiedApplicants = ``
    for (const applicant of mortgageApplicants) {
      const annualExpenses = calculateYearlyExpenses(applicant)
      const expensesPercentage = calculateExpensesPercentage(applicant, annualExpenses)
      const qualified = isQualified(applicant, expensesPercentage)
      
      if(qualified.mortgage.qualified) {
         qualifiedApplicants += `${applicant.name} is qualified for a maximum mortage of ${applicant.mortgage.amount }\n `
      }
    }
    return qualifiedApplicants;
}

let qualifiedApplicant = applicants()
console.log(qualifiedApplicant)





/*
    Iterate the array of mortgage applicants and use your
    functions to determine if they are qualified for a mortgage
*/












// **********  Do not touch this code  **********
module.exports = {
    calculateYearlyExpenses, calculateExpensesPercentage, isQualified
}
// **********  Do not touch this code  **********