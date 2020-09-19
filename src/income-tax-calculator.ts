// O IR (Imposto de Renda) é calculado da seguinte forma:
//   se salário-base > 2000, IR = (150) + (salário-base - 2000) * 20%
//   se 1000 < salário-base <= 2000, IR = (salário-base - 1000) * 15%
//   se salário-base <= 1000, IR = 0
//
//
export class IncomeTaxCalculator {
  public getIncomeTax (salary: number): number {
    let incomeTax = 0.0

    if (salary > 2000.0) {
      incomeTax += 150 + (salary - 2000.0) * (0.20)
    }

    if (salary > 1000.0 && salary <= 2000.0) {
      incomeTax += (salary - 1000.0) * (0.15)
    }

    if (salary > 3000.0) {
      incomeTax += (salary - 3000.0) * (0.05)
    }

    return incomeTax
  }
}
