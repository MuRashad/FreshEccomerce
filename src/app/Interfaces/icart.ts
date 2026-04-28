import { Iproducts } from "./iproducts"; 
export interface AddToCartResponse {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: CartData;
}

export interface CartData {
  _id: string;
  cartOwner: string;
  products: CartProduct[];
  updatedAt: string;
  totalCartPrice: number;
}

export interface CartProduct {
  _id:string;
  product:Iproducts;
  count: number;
  price: number;
}
export interface IuserPaymentForm{
  details:string ,
  phone:string,
  city:string 
}
export interface Iuserpayment{
  status:string,
  session:UserSession ,

}
export interface UserSession{
url:string,
success_url:string,
cancel_url:string ,
}