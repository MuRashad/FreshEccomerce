import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandsResponse } from '../Interfaces/ibrand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private _HttpClient:HttpClient){}


getBrand():Observable<BrandsResponse>
{
  return this._HttpClient.get<BrandsResponse>(`https://ecommerce.routemisr.com/api/v1/brands`)  
}
}

