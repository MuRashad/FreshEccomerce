import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(){}
  isLoading=signal(false) ;
  
  show(){
   return this.isLoading.set(true) ;
  }
  hide(){
   return this.isLoading.set(false) ;
  }
}
