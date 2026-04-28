import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http"
import { inject } from "@angular/core";
import { LoadingService } from "../Services/loading.service";
import { finalize } from "rxjs";

// export function loadingInterceptor(req:HttpRequest<any>,nexy:HttpHandlerFn){

// }
export const loadingInterceptor:HttpInterceptorFn=(req,next)=>{
  const _LoadingService = inject(LoadingService) ;
   _LoadingService.show() ; 
   
   return next(req).pipe(
    finalize(()=>{
        _LoadingService.hide() ;
    })
   ) ;
}