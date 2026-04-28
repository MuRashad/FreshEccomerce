import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IuserRegister } from '../Interfaces/user-register';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthUser {
userData:any ={} 
constructor(private _HttpClient:HttpClient){
}
sendRegisterData(userData:IuserRegister):Observable<any>{
return this._HttpClient.post<any>(`${environment.baseUrl}/api/v1/auth/signup`,userData);
}  
loginData(userData:object):Observable<any>{
return this._HttpClient.post<any>(`${environment.baseUrl}/api/v1/auth/signin`,userData)
}
saveUserInfo(){
  const encodedToken= localStorage.getItem('Token') ;
   if(encodedToken){
    const decoded=jwtDecode(encodedToken);
    console.log(decoded)
    this.userData=decoded ;
   }
}
forgetPassword(forgetForm:any):Observable<any>{
let userEmail=forgetForm.email
return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`,
{
  email:userEmail 
},
)
}

}
