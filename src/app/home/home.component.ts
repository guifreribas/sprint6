import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PanelComponent } from '../panel/panel.component';
import { BudgetService } from '../services/budget.service';
import { BudgetsListComponent } from '../budgets-list/budgets-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent, BudgetsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public totalBudget = signal<number>(0);
  // public budgetItems = signal<Record<string, number>[]>([]);
  public isWebChecked = signal<boolean>(false);

  public theBoundOnChange = () => {};

  public budget: FormGroup = new FormGroup({
    seoCheckbox: new FormControl(false),
    adsCheckbox: new FormControl(false),
    webCheckbox: new FormControl(false),
    languagesFrm: new FormControl(0, Validators.pattern('^[0-9]*$')),
    pagesFrm: new FormControl(0, Validators.pattern('^[0-9]*$')),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  constructor(private budgetService: BudgetService) {}

  addWebItem() {
    this.isWebChecked.update((prev) => !prev);
    if (!this.isWebChecked()) {
      this.budget.controls['languagesFrm'].setValue(0);
      this.budget.controls['pagesFrm'].setValue(0);
    }
  }

  onChangeInputs() {
    const result = this.budgetService.getTotalBudget({
      budget: this.budget,
      pages: this.budget.controls['pagesFrm'].value,
      languages: this.budget.controls['languagesFrm'].value,
    });
    this.totalBudget.set(result);
  }

  onSubmit() {
    this.budgetService.addBudget({
      ...this.budget.value,
      total: this.totalBudget(),
    });
    this.budget.reset();
    this.budget.controls['seoCheckbox'].setValue(false);
    this.budget.controls['adsCheckbox'].setValue(false);
    this.budget.controls['webCheckbox'].setValue(false);
    this.budget.controls['languagesFrm'].setValue(0);
    this.budget.controls['pagesFrm'].setValue(0);
    this.isWebChecked.set(false);
  }

  ngOnInit(): void {
    this.budget.valueChanges.subscribe(() => {
      this.onChangeInputs();
    });

    this.theBoundOnChange = this.onChangeInputs.bind(this);
  }
}
