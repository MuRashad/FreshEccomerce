import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishList {
  wishListIds:string[]=[] ;
  private get headers() {
    return { token: localStorage.getItem('Token') ?? '' };
  }
  constructor(private _HttpClient: HttpClient) { }

  addTowishList(prdId: string): Observable<any> {
    return this._HttpClient.post<any>(`${environment.baseUrl}/api/v1/wishlist`,
      {
        productId: prdId
      }
      ,
      {
        headers: this.headers
      }
    )
  }
  removeFromWishlist(prdId: string): Observable<any> {
    return this._HttpClient.delete<any>(`${environment.baseUrl}/api/v1/wishlist/${prdId}`,
      {
        headers: this.headers
      })
  }
  isWishlisted(prdId:string):boolean{
     return this.wishListIds.includes(prdId) ;
  }
}
