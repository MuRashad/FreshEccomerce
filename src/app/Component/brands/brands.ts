import { Component } from '@angular/core';
import { BrandService } from '../../Services/brand.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Brand } from '../../Interfaces/ibrand';
import { SearchElementPipe } from '../../pipeline/search-element-pipe';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  imports: [CommonModule,FormsModule,SearchElementPipe,RouterLink],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands {
brands:Brand[]=[];
name:string=""
searchInpElement:string="";
constructor(private _BrandService:BrandService, private _Router:Router){

}
ngOnInit(): void {
this._BrandService.getBrand().subscribe({
  next:(res)=>{
  console.log(res) ;
  this.brands=res.data ;
  this.name= this.brands[0].name
  console.log(this.brands)
  },
  error:(err)=>{
    console.log(err)
  },
  complete:()=>{
    console.log("misiion Done...!")
  }
})
}


}
