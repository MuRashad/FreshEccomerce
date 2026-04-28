import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthUser } from '../../Services/authUser';

@Component({
  selector: 'app-forgot-password',
  imports: [JsonPipe,FormsModule,ReactiveFormsModule,FormsModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  constructor(private _AuthUser:AuthUser){

  }
isLoading=signal(false) ;
succesMsg:string="" ;
failurMsg:string="" ;
forgetForm:FormGroup=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email])
})
resetPassword(){
  console.log(this.forgetForm.value) ;
  if(this.forgetForm.invalid){
    this.isLoading.set(true);
    this.forgetForm.markAllAsTouched() ;
  }
  else {
    this.isLoading.set(false);
    this._AuthUser.forgetPassword(this.forgetForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.succesMsg=res.message
        console.log(this.succesMsg)
      },
      error:(err)=>{
  // this.succesMsg=error.err
      this.failurMsg=err.error.message
      }
    })
  }
}
get email(){
  return this.forgetForm.get('email') ;
}

}
