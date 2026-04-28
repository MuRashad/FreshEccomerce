import { Component ,AfterViewInit, OnInit, ChangeDetectorRef, ElementRef, ViewChild} from '@angular/core';
import { Products } from '../products/products';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Icategories, Icategory } from '../../Interfaces/iproducts';
import { ProductsApi } from '../../Services/products-api';
import { CommonModule } from '@angular/common';
Swiper.use([Pagination]);
Swiper.use([Autoplay]);
Swiper.use([Navigation]);
@Component({
  selector: 'app-home',
  imports: [Products,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit,OnInit {
  @ViewChild('swiperRef') swiperRef!:ElementRef ;
  @ViewChild('swiperSlide') swiperSlide!:ElementRef ;
 Categories?:Icategory[]
  constructor(private _productCategories:ProductsApi,private _cdr:ChangeDetectorRef){
 }
  ngAfterViewInit(): void {
  new Swiper(this.swiperRef.nativeElement, {
      slidesPerView: 7,
      spaceBetween:1,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type:'bullets', 
      },
      autoplay:{
         waitForTransition:true,
      },
       breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }

    });
    new Swiper(this.swiperSlide.nativeElement,{
      loop: true,  
      autoplay: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type:'bullets', 
      },
    })
    console.log(this.swiperSlide.nativeElement)
  }
  ngOnInit(): void {
    this._productCategories.getAllCategories().subscribe({
      next:(res)=>{
         this.Categories=res.data ;
         this._cdr.detectChanges() ;
      }
    })
  }




}
