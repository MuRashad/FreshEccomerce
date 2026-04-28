import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
constructor(private _router:Router){
}
signOut(){
  if(localStorage.getItem('Token')!= null){
    localStorage.removeItem('Token') ;
    this._router.navigateByUrl(`/login`) ;
  }

}
}
