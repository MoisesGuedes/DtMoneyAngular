import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeComponent } from './transaction-type.component';

describe('TransactionTypeComponent', () => {
  let component: TransactionTypeComponent;
  let fixture: ComponentFixture<TransactionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with deposit type active', () => {
    expect(component.activeType).toEqual("deposit");
  });

  it('should change deposit active type on handle select deposit', () => {
    const nativeElement = fixture.nativeElement;
    const buttons = nativeElement.querySelectorAll('.radio-box');
    buttons[1].dispatchEvent(new Event('click'));

    expect(component.activeType).toEqual('withdraw');
  });
});
