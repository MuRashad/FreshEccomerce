import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IproductsResponse, Iproducts, IproductResponse, Icategories } from '../Interfaces/iproducts';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductsApi {
  constructor(private _HttpCLient:HttpClient){

  }
  //meta data 
  //data 
  //results 
  //i need to chnage the composition of make operation in soemthing
getAllProducts():Observable<Iproducts[]>
{
  //meta data 
  //data 
  //results 
  return this._HttpCLient.get<IproductsResponse>(`${environment.baseUrl}/api/v1/products`)
  .pipe(
     map((res)=>{
       return res.data.map((data):Iproducts=>{
        return {
              id: data.id,
              title: data.title,
              category: data.category,
              ratingsAverage: data.ratingsAverage,
              price: data.price,
              imageCover: data.imageCover

        }
       })
    }) 
  )
}
//interface =>IproductRes=>>>>>data===> Iproduct 
// getProduct():Observable<Iproducts>{
// return this._HttpCLient.get<IproductResponse>(`${environment.baseUrl}/api/v1/products/6428de2adc1175abc65ca05b`).pipe(
//   map((res): Iproducts => ({
//   id: res.data.id,           // ← Pick only what you need
//   title: res.data.title,
//   description: res.data.description,
//   price: res.data.price,
//   imageCover: res.data.imageCover
// })) 
  
// )
// }
getProduct(id:string|null):Observable<Iproducts>{
return this._HttpCLient.get<IproductResponse>(`${environment.baseUrl}/api/v1/products/${id}`).pipe(
  map((res): Iproducts => ({
  id: res.data.id,           // ← Pick only what you need
  title: res.data.title,
  description: res.data.description,
  price: res.data.price,
  imageCover: res.data.imageCover,
  category:res.data.category
})) 
  
)
}
getAllCategories():Observable<Icategories>{
  return this._HttpCLient.get<Icategories>(`${environment.baseUrl}/api/v1/categories`)
}

}
