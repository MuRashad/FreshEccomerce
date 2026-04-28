import { Routes } from '@angular/router';
import { Home } from './Component/home/home';
import { Notfound } from './Component/notfound/notfound';
import { Cart } from './Component/cart/cart';
import { Brands } from './Component/brands/brands';
import { Products } from './Component/products/products';
import { Register } from './Component/register/register';
import { Login } from './Component/login/login';
import { NavAuth } from './layout/nav-auth/nav-auth';
import { NavBlank } from './layout/nav-blank/nav-blank';
import { authGuard } from './Guards/auth-guard';
import { Categories } from './Component/categories/categories';
import { ProductDetails } from './Component/product-details/product-details';
import { Payment } from './Component/payment/payment';
import { Allorders } from './Component/allorders/allorders';
import { ForgotPassword } from './Component/forgot-password/forgot-password';
import { BrandDetails } from './Component/brand-details/brand-details';

export const routes: Routes = [

{path:'',component:NavAuth,children:[
    {path:'',redirectTo:"/login",pathMatch:'full'},
    {path:"register",component:Register},
    {path:"login",component:Login},
    {path:"forgot",component:ForgotPassword},
    // {path:'**',component:Notfound}

]},

{path:'',component:NavBlank,children:[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:Home,canActivate:[authGuard]},
    {path:'categories',component:Categories,canActivate:[authGuard]},
    {path:'brands',component:Brands,canActivate:[authGuard]},
    {path:'brandDtls',component:BrandDetails,canActivate:[authGuard]},
    {path:'cart',component:Cart,canActivate:[authGuard]},
    {path:'products',component:Products,canActivate:[authGuard]},
    {path:'prdDtls/:id',component:ProductDetails,canActivate:[authGuard]},
    {path:'payment/:id',component:Payment,canActivate:[authGuard]},
    {path:'allorders',component:Allorders,canActivate:[authGuard]},
    {path:'**',component:Notfound}

]},

// {path:'**',component:Notfound}

];
