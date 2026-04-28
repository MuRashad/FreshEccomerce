import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAuth } from '../../Component/navbar-auth/navbar-auth';

@Component({
  selector: 'app-nav-auth',
  imports: [RouterOutlet,NavbarAuth],
  templateUrl: './nav-auth.html',
  styleUrl: './nav-auth.css',
})
export class NavAuth {

}
