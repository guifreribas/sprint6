import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BudgetService } from '../services/budget.service';
import { CommonModule } from '@angular/common';
import { SortedAction } from '../models/budget';

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss',
})
export class BudgetsListComponent {
  public sortAction = signal<SortedAction>({ action: 'INIT', type: 'ASC' });

  constructor(public budgetService: BudgetService) {}

  sortByDate() {
    const actionType = this.sortAction().type;
    const isAscending = actionType === 'ASC';

    this.sortAction.set({ action: 'DATE', type: isAscending ? 'DESC' : 'ASC' });
    this.budgetService.budgets.update((prev) => {
      return prev.sort((a, b) =>
        isAscending
          ? b.createdAt.getTime() - a.createdAt.getTime()
          : a.createdAt.getTime() - b.createdAt.getTime()
      );
    });
  }

  sortByImport() {
    const actionType = this.sortAction().type;
    const isAscending = actionType === 'ASC';

    this.sortAction.set({
      action: 'IMPORT',
      type: isAscending ? 'DESC' : 'ASC',
    });
    this.budgetService.budgets.update((prev) => {
      return prev.sort((a, b) =>
        isAscending ? b.total - a.total : a.total - b.total
      );
    });
  }

  sortByName() {
    const actionType = this.sortAction().type;
    const isAscending = actionType === 'ASC';

    this.sortAction.set({ action: 'NAME', type: isAscending ? 'DESC' : 'ASC' });
    this.budgetService.budgets.update((prev) => {
      return prev.sort((a, b) => {
        return isAscending
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name);
      });
    });
  }

  ngOnInit() {}
}
