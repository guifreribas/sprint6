import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule, CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  @Input() budget!: FormGroup;
  @Input() onChangeInputs!: () => void;

  constructor() {}

  addPage() {
    this.budget.controls['pagesFrm'].setValue(
      Number(this.budget.controls['pagesFrm'].value) + 1
    );
    this.onChangeInputs();
  }
  removePage() {
    if (Number(this.budget.controls['pagesFrm'].value) > 0) {
      this.budget.controls['pagesFrm'].setValue(
        Number(this.budget.controls['pagesFrm'].value) - 1
      );
      this.onChangeInputs();
    }
  }
  addLanguage() {
    this.budget.controls['languagesFrm'].setValue(
      Number(this.budget.controls['languagesFrm'].value) + 1
    );
    this.onChangeInputs();
  }
  removeLanguage() {
    if (Number(this.budget.controls['languagesFrm'].value) > 0) {
      this.budget.controls['languagesFrm'].setValue(
        Number(this.budget.controls['languagesFrm'].value) - 1
      );
      this.onChangeInputs();
    }
  }

  ngOnInit(): void {}
}
