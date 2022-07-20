import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Transaction, Summary } from '../../interfaces/Transaction';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnChanges {
  constructor() { }
  @Input() transactions:Transaction[] = [];
  summary:Summary = {
    deposits:0,
    withdraws:0,
    total:0
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['transactions'].currentValue &&
       changes['transactions'].currentValue.length > 0){
      this.summary = this.getSummaryValues();
    }
  }

  getSummaryValues():Summary{
    return this.transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "deposit") {
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
        }

        return acc;
      },
      {
        deposits: 0,
        withdraws: 0,
        total: 0,
      }
    );
  }

}
