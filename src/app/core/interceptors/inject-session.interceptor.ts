import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  try{
    let token = inject(AuthService).getToken();
    if(token !== ""){
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
      return next(cloned);
    }else{
      return next(req);
    }
  }catch(err){
    console.log("Error in sessson intercetor ", err)
    return next(req);
  }
};
