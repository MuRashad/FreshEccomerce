import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersResponse } from '../Interfaces/iorders';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Orders {
  constructor(private _HttpClient:HttpClient){
  }

  getOrders():Observable<OrdersResponse>{
    return this._HttpClient.get<OrdersResponse>(`${environment.baseUrl}/api/v1/orders/`)
  }
}
