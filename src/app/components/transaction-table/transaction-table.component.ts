import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/Transaction';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent {
  constructor() { }
  @Input() transactions:Transaction[] = [];
}
