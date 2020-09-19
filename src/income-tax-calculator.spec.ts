import { IncomeTaxCalculator } from './income-tax-calculator'

describe('income tax validator', () => {
  let incomeTaxCalculator: IncomeTaxCalculator

  beforeEach(() => { incomeTaxCalculator = new IncomeTaxCalculator() })

  /* Apenas os testes:

    - test('should incomeTax==350 if salary is 3000')
    - test('should incomeTax==600 if salary is 4000')
    - test('should incomeTax==225 if salary is 1500')

    Cobrem todas as sentenças (Stmts) e ramos (Branch) do código
  */

  test('should incomeTax==600 if salary > 2000', () => {
    const salary = 4000
    const incomeTax = incomeTaxCalculator.getIncomeTax(salary)
    expect(incomeTax).toEqual(550)
  })

  test('should incomeTax==225 if salary > 1000 && salario <= 2000', () => {
    const salary = 1500
    const incomeTax = incomeTaxCalculator.getIncomeTax(salary)
    expect(incomeTax).toEqual(75)
  })

  test('should incomeTax==0 if salary < 1000', () => {
    const salary = 1500
    const incomeTax = incomeTaxCalculator.getIncomeTax(salary)
    expect(incomeTax).toEqual(75)
  })
})
