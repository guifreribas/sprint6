import { WritableSignal } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface UpdateCheckboxParams {
  checkbox?: string;
  numberInput?: string;
}

export interface TotalBudgetParams {
  budget: FormGroup;
  pages: WritableSignal<number>;
  languages: WritableSignal<number>;
}

export interface Budget {
  seoCheckbox: boolean;
  adsCheckbox: boolean;
  webCheckbox: boolean;
  languagesFrm: number;
  pagesFrm: number;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  total: number;
}

export type SortedAction = {
  action: 'INIT' | 'DATE' | 'IMPORT' | 'NAME';
  type: 'ASC' | 'DESC';
};
