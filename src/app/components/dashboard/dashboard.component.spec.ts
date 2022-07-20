import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { TransactionService } from '../../services/transaction.service';
import { of } from 'rxjs';
import { SummaryComponent } from '../summary/summary.component';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';
import { MockComponent } from 'ng-mocks';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const transactionService: Partial<TransactionService> = {
    getTransactions: () => of([{
      id: 1655078317476,
      title: 'Carro',
      amount: 50000,
      type: 'withdraw',
      category: 'Locomoção',
      createdAt: '1655078317476',
    }])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent, MockComponent(TransactionTableComponent), MockComponent(SummaryComponent) ],
      providers: [
        {provide:TransactionService, useValue:transactionService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('inner', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })
});
