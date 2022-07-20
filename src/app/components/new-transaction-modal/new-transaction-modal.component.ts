import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../interfaces/Transaction';

@Component({
  selector: 'app-new-transaction-modal',
  templateUrl: './new-transaction-modal.component.html',
  styleUrls: ['./new-transaction-modal.component.scss']
})
export class NewTransactionModalComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  showModal = false;
  @Output() onSucessSubmit = new EventEmitter();
  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      amount: new FormControl(0, Validators.required),
      category: new FormControl('', Validators.required),
      type: new FormControl('deposit', Validators.required),
    });
  }

  onSelectType(selectedType:string){
    this.form.controls['type'].setValue(selectedType);
  }

  handleOpenModal(){
    this.showModal = true;
  }

  handleHideModal(){
    this.showModal = false;
  }

  handleSubmit(){
    if(this.form.valid){
      const { title, amount, category, type } = this.form.value;
      const transaction:Transaction = {
        id: Date.now(),
        title,
        amount,
        category,
        type,
        createdAt: Date.now().toString()
      }

      this.transactionService.createTransaction(transaction).subscribe(() => {
        this.onSucessSubmit.emit();
        this.showModal = false;
      })
    }
  }
}
