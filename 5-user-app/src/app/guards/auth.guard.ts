import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  //Se inicia el guard y se valida si el usuario tiene la sesion iniciada
  if(inject(AuthService).isAuth()){
    if(isTokenExpired()){
      inject(AuthService).logout();
      inject(Router).navigate(['/login']);
      return false;
    }
    if(!inject(AuthService).isAdmin()){ //Se valida si el usuario es administrador
      inject(Router).navigate(['/forbidden']);  //Si no es administrador se redirecciona al forbbiden
      return false;
    }
    return true;
  }   
  inject(Router).navigate(['/login']);
  return false;

};

const isTokenExpired = () => {
  const service = inject(AuthService);
  const token = service.token;
  const payload = service.getPayload(token);
  const exp = payload.exp;
  const now = new Date().getTime() / 1000;//in seconds
  console.log(exp, now);
  return now > exp ? true : false;
}
