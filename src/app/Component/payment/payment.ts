import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../Services/cartService';
import { IuserPaymentForm } from '../../Interfaces/icart';

@Component({
  selector: 'app-payment',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment implements OnInit {
  cartId:string|null=null;
  paymentdata?:IuserPaymentForm
constructor(private _ActivatedRoute:ActivatedRoute,private _CartService:CartService){
}
paymentForm:FormGroup=new FormGroup({
  details:new FormControl('',[Validators.required,Validators.maxLength(50)]),
  phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  city:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(35)])
})
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this._ActivatedRoute.paramMap.subscribe({
    next:(param)=>{
    this.cartId=param.get('id') ;
    console.log(this.cartId)
    }
  })
}
handleForm(){
//69ded810cff7dd67a822529c
  if(this.paymentForm.invalid){
    console.log(this.paymentForm.value)
    this.paymentForm.markAllAsTouched() ;
  }
  if(this.paymentForm.valid){
    console.log(this.paymentForm.value);
    this.paymentdata=this.paymentForm.value 
    console.log(this.paymentdata)
    console.log(this.cartId)
  this._CartService.getPaymentInfo(this.cartId,this.paymentdata).subscribe({
    next:({session})=>{
     console.log(session.url)
     window.open(`${session.url}`,'_self')
    },
    error:(err)=>{
      console.log(err)
    }
  })
  }

}
get phone(){
return this.paymentForm.get('phone') ;
}
get details(){
return this.paymentForm.get('details') ;
}
get city(){
return this.paymentForm.get('city') ;
}

}
