import { TransactionTypeComponent } from './../transaction-type/transaction-type.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionModalComponent } from './new-transaction-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../interfaces/Transaction';
import { Observable, of } from 'rxjs';
import { MockComponent } from 'ng-mocks';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

class MockTransactionService {
  createTransaction(transaction:Transaction):Observable<any>{
    return of({})
  }
}
describe('NewTransactionModalComponent', () => {
  let component: NewTransactionModalComponent;
  let fixture: ComponentFixture<NewTransactionModalComponent>;
  let transactionService:MockTransactionService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NewTransactionModalComponent,
        MockComponent(TransactionTypeComponent)
      ],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      providers:[
        {provide:TransactionService, useClass:MockTransactionService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransactionModalComponent);
    component = fixture.componentInstance;
    transactionService = TestBed.inject(TransactionService);
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setValue in typeControl on select a type value', () => {
    component.onSelectType('deposit');
    const controlValue = component.form.get('type')?.value;
    expect(controlValue).toBe('deposit');
  });

  it('should open modal on handleOpenModal', () => {
    component.handleOpenModal();
    expect(component.showModal).toBeTruthy();
  });

  it('should close modal on click at close button', () => {
    component.handleOpenModal();
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('.close');
    button.dispatchEvent(new Event('click'));
    expect(component.showModal).toBeFalse();
  });

  it('should handle submit if the form is valid', () => {
    const component = fixture.componentInstance;
    component.handleOpenModal();
    component.form.setValue({
      title:'amoutTest',
      amount:1000,
      category:'categoryTest',
      type:'deposit'
    });
    spyOn(transactionService, 'createTransaction');

    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const buttons = nativeElement.querySelectorAll('button');
    buttons[1].dispatchEvent(new Event('click'));
    expect(transactionService.createTransaction).toHaveBeenCalled();
  });

  it('should emit successSubmit event and close the modal at create new transaction', () => {
    const component = fixture.componentInstance;
    component.handleOpenModal();
    component.form.setValue({
      title:'amoutTest',
      amount:1000,
      category:'categoryTest',
      type:'deposit'
    });
    spyOn(component.onSucessSubmit, 'emit');

    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const buttons = nativeElement.querySelectorAll('button');
    buttons[1].dispatchEvent(new Event('click'));
    expect(component.onSucessSubmit.emit).toHaveBeenCalled();
    expect(component.showModal).toBeFalse();
  });
});
