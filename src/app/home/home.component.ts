import { Component, ViewChild, effect, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PanelComponent } from '../panel/panel.component';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public totalBudget = signal<number>(0);
  public budgetItems = signal<Record<string, number>[]>([]);
  public isWebChecked = signal<boolean>(false);

  public theBoundOnChange = () => {};

  public budget: FormGroup = new FormGroup({
    seoCheckbox: new FormControl(false),
    adsCheckbox: new FormControl(false),
    webCheckbox: new FormControl(false),
    languagesFrm: new FormControl(0, Validators.pattern('^[0-9]*$')),
    pagesFrm: new FormControl(0, Validators.pattern('^[0-9]*$')),
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
    console.log({ budget: this.budget });
    const result = this.budgetService.getTotalBudget({
      budget: this.budget,
      pages: this.budget.controls['pagesFrm'].value,
      languages: this.budget.controls['languagesFrm'].value,
    });
    this.totalBudget.set(result);
  }

  ngOnInit(): void {
    this.budget.valueChanges.subscribe(() => {
      this.onChangeInputs();
    });

    this.theBoundOnChange = this.onChangeInputs.bind(this);
  }
}
