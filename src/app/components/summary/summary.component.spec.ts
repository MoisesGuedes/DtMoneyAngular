import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  const transactions = [
    {
      "id": 1655078189703,
      "title": "Salario",
      "amount": 15000,
      "category": "Salario",
      "type": "deposit",
      "createdAt": "1655078189703"
    },
    {
      "id": 1655078317476,
      "title": "Carro",
      "amount": 50000,
      "category": "Locomoção",
      "type": "withdraw",
      "createdAt": "1655078317476"
    }
  ];
  const summaryCalcResult = {
    "deposits": 15000,
    "withdraws": 50000,
    "total": -35000
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calc summary values if receive valid transactions at input decorator', () => {
    component.transactions = transactions;
    fixture.detectChanges();
    component.ngOnChanges({
      transactions: new SimpleChange(null, component.transactions, true)
    });
    expect(component.summary).toEqual(summaryCalcResult);
  });
});
