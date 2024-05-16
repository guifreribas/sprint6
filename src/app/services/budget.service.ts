import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor() {}

  //Nombre de pàgines * el nombre d'idiomes * 30)€.
  getTotalWeb(pages: number, languages: number): number {
    if (pages < 0 || languages < 0) return 500;
    return pages * languages * 30 + 500;
  }

  getTotalBudget({
    budget,
    pages,
    languages,
  }: {
    budget: FormGroup;
    pages: number;
    languages: number;
  }): number {
    let total = 0;
    if (typeof pages !== 'number') pages = 0;
    if (typeof languages !== 'number') languages = 0;

    if (budget.controls['seoCheckbox'].value) {
      total += 300;
    }
    if (budget.controls['adsCheckbox'].value) {
      total += 400;
    }
    if (budget.controls['webCheckbox'].value) {
      total += this.getTotalWeb(pages, languages);
    }
    return total;
  }
}
