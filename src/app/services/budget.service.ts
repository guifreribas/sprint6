import { Injectable, WritableSignal } from '@angular/core';
// import { TotalBudgetParams } from '../models/budget';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor() {}

  //Nombre de pàgines * el nombre d'idiomes * 30)€.
  getTotalWeb(
    pages: number,
    languages: number
    // pages: WritableSignal<number>,
    // languages: WritableSignal<number>
  ): number {
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
    // pages: WritableSignal<number>;
    // languages: WritableSignal<number>;
  }): number {
    let total = 0;

    if (budget.controls['seoCheckbox'].value) {
      total += 300;
    }
    if (budget.controls['adsCheckbox'].value) {
      total += 400;
    }
    if (budget.controls['webCheckbox'].value) {
      total += this.getTotalWeb(pages, languages);
    }
    console.log(total);
    return total;
  }
}
