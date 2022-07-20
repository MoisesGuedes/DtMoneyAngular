import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Observable, of } from 'rxjs';
import { Transaction } from '../../interfaces/Transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private transactionService:TransactionService) { }
  transactions$:Observable<Transaction[]> = of([]);

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(){
    this.transactions$ = this.transactionService.getTransactions()
  }

}
