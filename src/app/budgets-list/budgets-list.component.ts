import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../models/budget';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss',
})
export class BudgetsListComponent {
  constructor(public budgetService: BudgetService) {}

  ngOnInit() {}
}
