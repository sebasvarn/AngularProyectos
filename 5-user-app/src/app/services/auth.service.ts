import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url :string = 'http://localhost:8080/login';
  private _token: string = '';
  private _user: any = {
    isAuth: false,
    isAdmin: false,
    user: {}
  };



  
  constructor(private http: HttpClient) {}

  loginUser({username, password} : any): Observable<any> {
    return this.http.post<any>(this.url, {username, password});
  }

  set user(user: any) {
    sessionStorage.setItem('login', JSON.stringify(user));
    this._user = user;
  }

  get user() {
    if (this._user.isAuth){
      return this._user;
    }else if(sessionStorage.getItem('login') != null){
      this._user = JSON.parse(sessionStorage.getItem('login') || '{}');
    }
    
    return this._user;
  }

  set token(token: string) {
    sessionStorage.setItem('token', token);
    this._token = token;
  }

  get token() {
    if (this._token != undefined){
      return this._token;
      //devuelve el token de la sesion
    } else if(sessionStorage.getItem('token') != null){
      
      //no hace falta convertirlo a objeto porque el token es un string
      this._token = sessionStorage.getItem('token') || ''; 
    }
    
    return this._token;
  }
  
  getPayload(token: string): any {
    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }



}
