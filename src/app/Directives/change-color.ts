import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { WishList } from '../Services/wish-list';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColor implements OnChanges {
  //decorator??
  @Input("appChangeColor") defaultBg: string = "";
  @Input() productId!: string;
  element: ElementRef;
  constructor(e: ElementRef, private _WishList: WishList,private _toasterService:ToastrService) {
    this.element = e
  }
  ngOnChanges(): void {
    this.element.nativeElement.classList.add(this.defaultBg);
  }

  // @HostListener("click") addToWishList(){
  // console.log("this iss the produxtl" ,this.productId)
  // console.log(this.element?.nativeElement) ;
  // if(this.flag){
  //   this.element?.nativeElement.classList.add('text-red-500')
  //   this.flag=false
  // }else{
  //   this.element?.nativeElement.classList.remove('text-red-500')
  //   this.flag=true ;
  // }
  // }
 get isWishListHasID():boolean{
    return this._WishList.isWishlisted(this.productId) ;
  }
@HostListener('click') wishListInteractions(){
  if(!this.isWishListHasID){
   this._WishList.addTowishList(this.productId).subscribe({
     next:(res)=>{
      console.log('added',res)
      this._WishList.wishListIds=res.data ;
      this.element.nativeElement.classList.add("text-red-500")
      this._toasterService.success(res.message) ;
    },
    error:(err)=>{
      console.log(err)
    }
   })
  }
  else{
    this._WishList.removeFromWishlist(this.productId).subscribe({
    next:(res)=>{
      console.log('deltedres',res)
      this._WishList.wishListIds=res.data ;
      this.element.nativeElement.classList.remove("text-red-500")
      this._toasterService.success(res.message) ;
    },
    error:(err)=>{
      console.log(err)
    }
   })
  }
}

}
