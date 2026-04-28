import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { LoadingService } from '../../Services/loading.service';

@Component({
  selector: 'app-loading-screen',
  imports: [],
  templateUrl: './loading-screen.html',
  styleUrl: './loading-screen.css',
})
export class LoadingScreen implements OnInit,OnDestroy {
  ngOnInit(): void { 
   document.body.classList.add('overflow-hidden')
  }
  ngOnDestroy(): void {
    document.body.classList.remove('overflow-hidden')

  }
}
