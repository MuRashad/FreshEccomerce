import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthUser } from '../../Services/authUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule,FormsModule,JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
constructor(private _authUser:AuthUser,private _Router:Router ,private _cdr:ChangeDetectorRef ){
}
isLoading:boolean=false ;
loginForm:FormGroup=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required, Validators.pattern(/^\w{6,}$/)])
})
handleLogin(){
if(this.loginForm.invalid){
   this.loginForm.markAllAsTouched();
   return
}
console.log(this.loginForm.value);
this.isLoading=true ;
this._authUser.loginData(this.loginForm.value).subscribe({
  next:(res)=>{
    console.log(res)
    if(res.message==="success"){
    localStorage.setItem('Token',res.token) ;
    this._cdr.detectChanges()
    this.isLoading=false
    this._authUser.saveUserInfo();
    this._Router.navigateByUrl(`/home`)
    }

  },
  error:(err)=>{
    this._cdr.detectChanges()
    this.isLoading=false
    console.log(err)
  },
  complete:()=>{
    console.log("mission is done")
  }
})
}
get email(){
return this.loginForm.get('email'); 
}
get password(){
return this.loginForm.get('password');
}
forgetPassword(){
  this._Router.navigateByUrl(`/forgot`) ;
}
}
