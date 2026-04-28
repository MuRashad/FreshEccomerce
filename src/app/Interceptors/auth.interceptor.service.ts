import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";

// import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function authInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) {
  const userToken = localStorage.getItem("Token");
  if (!userToken){
    console.log("req",req)
    return next(req);
  } 
  const modifiedReq = req.clone({
    // headers: req.headers.set("token", userToken),
    setHeaders:{
      token: userToken 
    },
  });
  console.log("modifiedReq",modifiedReq)

  return next(modifiedReq);
}


// export  const authInterceptor:HttpInterceptorFn=(req,next)=>{

//     console.log(req) ;
// return next(req)

// }