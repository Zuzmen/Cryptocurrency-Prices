import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PeriodicElement} from "../components/cryptocurrency-prices/components/crypto-currency-prices.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getTcpData(): Observable<PeriodicElement[]> {
    return this.http.get<any>('http://localhost:3000/data');
  }
}
