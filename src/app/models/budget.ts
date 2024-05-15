import { WritableSignal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// export type BudgetCheckboxItems = 'seoCheckbox' | 'adsCheckbox' | 'webCheckbox';
// export type BudgetNumberItems = 'languages' | 'pages';

export interface UpdateCheckboxParams {
  checkbox?: string;
  numberInput?: string;
}

export interface TotalBudgetParams {
  budget: FormGroup;
  pages: WritableSignal<number>;
  languages: WritableSignal<number>;
}

interface MyForm {
  seoCheckbox: FormControl<boolean | null>;
  adsCheckbox: FormControl<boolean | null>;
  webCheckbox: FormControl<boolean | null>;
  languages: FormControl<number>;
  pages: FormControl<number>;
}
