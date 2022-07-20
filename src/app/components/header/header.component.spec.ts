import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('inner', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should emit openModalEvent on click', () => {
      const component = fixture.componentInstance;
      spyOn(component.openNewTransactionModal, 'emit');

      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelector('button');
      button.dispatchEvent(new Event('click'));

      expect(component.openNewTransactionModal.emit).toHaveBeenCalled();
   });
  })
});
