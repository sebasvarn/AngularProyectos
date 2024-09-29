import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const service = inject(AuthService);
  const token = service.token;
  if(token){
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
    return next(authRequest);
  }
  return next(req);
};
