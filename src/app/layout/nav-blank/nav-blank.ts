import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../Component/navbar/navbar';
import { Footer } from '../../Component/footer/footer';
@Component({
  selector: 'app-nav-blank',
  imports: [RouterOutlet,Navbar,Footer],
  templateUrl: './nav-blank.html',
  styleUrl: './nav-blank.css',
})
export class NavBlank {

}
