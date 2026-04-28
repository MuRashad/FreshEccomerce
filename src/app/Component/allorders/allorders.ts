import { Component, OnInit } from '@angular/core';
import { Orders } from '../../Services/orders';

@Component({
  selector: 'app-allorders',
  imports: [],
  templateUrl: './allorders.html',
  styleUrl: './allorders.css',
})
export class Allorders implements OnInit {
constructor(private _Orders:Orders){}
ngOnInit(): void {
this._Orders.getOrders().subscribe({
  next:(res)=>console.log(res)  
})
  
}
}
