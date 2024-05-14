import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Checkbox } from '../models/budget';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public totalBudget = signal<number>(0);

  public budget = new FormGroup({
    seoCheckbox: new FormControl(false),
    adsCheckbox: new FormControl(false),
    webCheckbox: new FormControl(false),
  });

  private budgetPrices: Record<string, number> = {
    seoCheckbox: 300,
    adsCheckbox: 400,
    webCheckbox: 500,
  };

  constructor() {}

  updateCheckbox(id: Checkbox) {
    this.budget.controls[id].setValue(!this.budget.controls[id].value);
    this.calculateBudget(id);
  }

  calculateBudget(id: Checkbox) {
    if (this.budget.controls[id].value) {
      this.totalBudget.update((prev) => prev + this.budgetPrices[id]);
    } else {
      this.totalBudget.update((prev) => prev - this.budgetPrices[id]);
    }
  }

  ngOnInit(): void {}
}
