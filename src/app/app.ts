import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './Component/footer/footer';
import { LoadingScreen } from './Component/loading-screen/loading-screen';
import { LoadingService } from './Services/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoadingScreen],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eccomerce');
  constructor(public _LoadingService:LoadingService){
  }
}
