import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http:HttpClient) { }
  apiUrl = environment.apiUrl;

  getTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.apiUrl}transactions`);
  }

  createTransaction(transaction:Transaction):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}transactions`, transaction);
  }
}
