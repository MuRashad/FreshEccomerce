import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)

  if(localStorage.getItem('Token') != null){
    return true
  }
  else{
      console.log('No token - redirecting to login');
    router.navigateByUrl(`/login`)
    return false
  }

};
