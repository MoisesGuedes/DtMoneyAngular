import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('TransactionService', () => {
  let service: TransactionService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TransactionService);
    http = TestBed.inject(HttpClient);
  });
  describe('inner', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
    it('should get transactions with the correct endpoint', () => {
      const spy = spyOn(http, 'get').and.callThrough();
      service.getTransactions();
      expect(spy).toHaveBeenCalledWith(`${service.apiUrl}transactions`)
    });
    it('should create transactions with the correct endpoint', () => {
      const spy = spyOn(http, 'post').and.callThrough();
      const transaction = {
        "id": 1655078189703,
        "title": "Salario",
        "amount": 15000,
        "category": "Salario",
        "type": "deposit",
        "createdAt": "1655078189703"
      }
      service.createTransaction(transaction);
      expect(spy).toHaveBeenCalledWith(`${service.apiUrl}transactions`, transaction)
    });
  })
});
