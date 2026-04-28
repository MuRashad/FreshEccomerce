import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApi } from '../../Services/products-api';
import { IproductResponse, Iproducts } from '../../Interfaces/iproducts';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Products } from '../products/products';
import { AddProduct } from '../../Services/add-product';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe,CommonModule,Products],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
productDtls?:Iproducts;
productId:string|null=""
constructor(private _ActivatedRoute:ActivatedRoute,
   private _productApi:ProductsApi, 
   private cdr:ChangeDetectorRef,private _AddProduct:AddProduct){
// Component

}

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next: (params) => {
      this.productId = params.get('id');

      if (this.productId) {
        this._productApi.getProduct(this.productId).subscribe({
          next: (data) => {
            this.productDtls = data;
            console.log(this.productDtls)
            this.cdr.detectChanges();
          }
        });
      }
    }
  });
}
addToCart(id:string|undefined){
this._AddProduct.addToCart(id) ;
}


}