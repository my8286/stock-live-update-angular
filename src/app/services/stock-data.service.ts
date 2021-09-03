import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  _url="http://localhost:5000";
  constructor(private _http:HttpClient) { }

  getLive():Observable<any[]>{
    return this._http.get<any[]>(`${this._url}/live`);
  }

}
