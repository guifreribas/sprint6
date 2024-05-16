import { TestBed } from '@angular/core/testing';
import { BudgetService } from './budget.service';

describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should return 0, if pages and languages are 0', () => {
    expect(service.getTotalWeb(0, 0)).toBe(500);
  });

  it('should return 0, if pages is 0 and languages is 1', () => {
    expect(service.getTotalWeb(0, 1)).toBe(500);
  });
  it('should return 0, if pages is 1 and languages is 0', () => {
    expect(service.getTotalWeb(1, 0)).toBe(500);
  });
  it('should return 30, if pages and languages are 1', () => {
    expect(service.getTotalWeb(1, 1)).toBe(530);
  });
  it('should return 60', () => {
    expect(service.getTotalWeb(2, 1)).toBe(560);
  });
  it('should return 0, if pages or languages are negative number', () => {
    expect(service.getTotalWeb(-1, 1)).toBe(500);
  });
});
