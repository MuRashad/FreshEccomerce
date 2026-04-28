import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsApi } from '../../Services/products-api';
import { Iproducts } from '../../Interfaces/iproducts';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Services/cartService';
import { AddToCartResponse } from '../../Interfaces/icart';
import { ToastrService } from 'ngx-toastr';
import { AddProduct } from '../../Services/add-product';
import { SearchElementPipe } from '../../pipeline/search-element-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe,RouterLink,SearchElementPipe,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit , OnChanges {
products:Iproducts[]=[];
searchInpElement:string="";
constructor(private _productsApi:ProductsApi,private cdr:ChangeDetectorRef
  ,private _Cart:CartService,private _AddProduct:AddProduct){

}
ngOnInit(): void {
this._productsApi.getAllProducts().subscribe({
  next:(res)=>{
  console.log(res)
  this.products=res ;
  this.cdr.detectChanges() ;

  // console.log(this.products)
  },
  error:(err)=>{
    console.log(err)
  },
  complete:()=>{
    console.log("misiion Done...!")
  }
})

}
ngOnChanges(changes: SimpleChanges): void {
  
}

addToCart(id:string|undefined){
this._AddProduct.addToCart(id) ;
}

}
