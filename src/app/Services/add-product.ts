import { Injectable } from '@angular/core';
import { CartService } from './cartService';
import { AddToCartResponse } from '../Interfaces/icart';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AddProduct {
  cartProducts?:AddToCartResponse
  
  constructor(private _Cart:CartService,private toastr:ToastrService) {

  }
  addToCart(id: string | undefined) {
    this._Cart.addProductToCart(id).subscribe({
      next: (res) => {
        this.cartProducts = res
        console.log(this.cartProducts)
        this.toastr.success(this.cartProducts.message, "success");

      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}