import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule, FormControlOptions } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { AuthUser } from '../../Services/authUser';
import { Router } from '@angular/router';
import { IuserRegister } from '../../Interfaces/user-register';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, JsonPipe, CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private _authUser: AuthUser, private _router: Router, private _cdr: ChangeDetectorRef) {
  }

  errMsg: string = "";
  isLoading: boolean = false;
  registerData: IuserRegister = {} as IuserRegister
  registerForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl(""),
    rePassword: new FormControl(""),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
    //make it for all numbers with detect Country , check if country number is right
    //add multiple Numbers
    //use get name, get email ,... ,etc instead of make it in html  
  },
  {validators:[this.confirmPassword]} as FormControlOptions)
  handleRegister() {
    console.log(this.registerForm.valid)
    console.log('START', this.isLoading);
    this.registerData = this.registerForm.value;

    if (this.registerForm.invalid){
      console.log('FORM INVALID');
      this.registerForm.markAllAsTouched(); // يظهر الفاليديشن
      return;
    }
    console.log('LOADING TRUE');
    this.isLoading = true;
    this._authUser.sendRegisterData(this.registerData).subscribe({
      next:(res)=>{
        this.isLoading = false;
        if (res.message === "success") {
          this._cdr.detectChanges();
          console.log('LOADING FALSE IN NEXT');
          alert("you are loged in successfully!")
          console.log(res)
          this._router.navigateByUrl(`/login`)}
      },
      error: (error) => {
        this._cdr.detectChanges();
        this.isLoading = false;
        this.errMsg = error.error.message
        console.log(this.errMsg)
        console.log('LOADING FALSE IN ERROR');
      },
      complete: () => {
        console.log("Mission Is Done..!")
      }
    })
  }
  
confirmPassword(RegisterGroup:FormGroup):void{
const password=RegisterGroup.get("password") ;
const rePassword=RegisterGroup.get("rePassword") ;
if(rePassword?.value === ''){
rePassword.setErrors({required:true}) ;
}
else if(password?.value!==rePassword?.value){
  rePassword?.setErrors({mismatch:true});
}
}
}

//  [Validators.required, Validators.pattern(/^\w{6,}$/)] ;
//  [Validators.required, Validators.pattern(/^\w{6,}$/)] ;