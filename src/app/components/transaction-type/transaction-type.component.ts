import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transaction-type',
  templateUrl: './transaction-type.component.html',
  styleUrls: ['./transaction-type.component.scss']
})
export class TransactionTypeComponent implements OnInit {
  @Output() selectedType = new EventEmitter();
  activeType = 'deposit';
  constructor() { }

  ngOnInit(): void {
  }

  handleClickRadioBox(selectedType:string){
    this.activeType = selectedType;
    this.selectedType.emit(selectedType);
  }
}
