import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from '../../Services/cartService';
import { AddToCartResponse, CartData, CartProduct } from '../../Interfaces/icart';
import { ToastrService } from 'ngx-toastr';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
cartOfProducts?:AddToCartResponse ;
CardData?:CartData;
productsInCard?:CartProduct[]
isLoading:boolean=true 
constructor(private _CartService:CartService,private toastr: ToastrService 
  ,private _cdr:ChangeDetectorRef,private _renderer2:Renderer2 ,private _Router:Router){}
ngOnInit(): void {
  this.isLoading = true; 
  this._CartService.getCartProduct().subscribe({
    next:(res)=>{
      this.cartOfProducts=res ;
      this.CardData=this.cartOfProducts.data ;
      this.productsInCard=this.CardData.products ;
      this.isLoading=false ;
      this._cdr.detectChanges() 
      console.log(res);
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

deleteItem(id:string|undefined){

  this.isLoading = true;  
 this._CartService.removeCartProduct(id).subscribe({
  next:(res)=>{
    this.cartOfProducts=res ;
    this.CardData=this.cartOfProducts.data ;
    this.productsInCard=this.CardData.products ;
    this.isLoading=false ; //false
    this._cdr.detectChanges() ;
    console.log(res) ;
  },
  error:(err)=>{
    console.log(err)
  }
})
}
changeCount(counter:number,prdId:string|undefined,btn1:HTMLButtonElement,btn2:HTMLButtonElement){
  this.isLoading = true; // 
  if(counter >= 1){
   this._renderer2.setProperty(btn1,'disabled',true) ;
   this._renderer2.setProperty(btn2,'disabled',true) ;

   console.log("first btn 1",btn1)
   console.log("first btn 2",btn2)
   this._CartService.UpdateCount(prdId,counter).subscribe({
    next:(res)=>{
      console.log(res) ;
      this._renderer2.setProperty(btn1,'disabled',false) ;
      this._renderer2.setProperty(btn2,'disabled',false) ;
      this.cartOfProducts=res ;
      this.CardData=this.cartOfProducts.data ;
      this.productsInCard=this.CardData.products ;
      this.isLoading=false;
      this._cdr.detectChanges();
    },
    error:(err)=>{
      console.log(err);
      this._renderer2.setProperty(btn1, 'disabled', false);
      this._renderer2.setProperty(btn2, 'disabled', false);
    }
    
  })
  }

}
goToPrdDetsilas(idx:number,Product:any){
//  this._Router.navigateByUrl(`/`)
console.log(idx) ;
console.log(Product);
let productId=Product.product._id
console.log(productId)
this._Router.navigateByUrl(`/prdDtls/${productId}`)
}
}
