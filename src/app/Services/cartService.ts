import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AddToCartResponse, Iuserpayment, IuserPaymentForm } from '../Interfaces/icart';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  userToken:any={
   token:localStorage.getItem('Token'),
  }
constructor(private _HttpClient:HttpClient){}

addProductToCart(id:string|undefined):Observable<AddToCartResponse>{
return this._HttpClient.post<AddToCartResponse>(`${environment.baseUrl}/api/v1/cart`,
  {
   productId:id
  },
  {
    headers:this.userToken
  }) 
}
getCartProduct():Observable<AddToCartResponse>{
 return this._HttpClient.get<AddToCartResponse>(`${environment.baseUrl}/api/v1/cart`
  // ,
  // {headers:this.userToken}
 )
}
removeCartProduct(id:string|undefined):Observable<AddToCartResponse>{
  return this._HttpClient.delete<AddToCartResponse>(`${environment.baseUrl}/api/v1/cart/${id}`
    // ,
    // {
    //   headers:this.userToken
    // }
  )
}
UpdateCount(id:string|undefined,counter:number):Observable<AddToCartResponse>{
return this._HttpClient.put<AddToCartResponse>(`${environment.baseUrl}/api/v1/cart/${id}`,
  {
    count:counter
  },
  // {
  //   headers:this.userToken
  // }
)
}
getPaymentInfo(CardId:string|null,paymentForm?:IuserPaymentForm):Observable<Iuserpayment>{
return this._HttpClient.post<Iuserpayment>(`${environment.baseUrl}/api/v1/orders/checkout-session/${CardId}?url=http://localhost:4200`,
{
shippingAddress:paymentForm
},
// {
// headers:this.userToken 
// },
)
}
}
