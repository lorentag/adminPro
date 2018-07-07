import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import swal from 'sweetalert';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  token: string;

  constructor(public http: HttpClient, public router: Router) {
   this.loadLocalStorage();
  }


  isLogged() {
    return ( this.token.length > 5 ) ? true : false;
  }

  saveLocalStorage(resp: any) {

    localStorage.setItem('id', resp.id );
    localStorage.setItem('token', resp.token );
    localStorage.setItem('user', JSON.stringify( resp.user ) );

    this.user = resp.user;
    this.token = resp.token;

  }

  loadLocalStorage() {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }

  login( user: User, rememberme: boolean) {

    if (rememberme) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICES + '/login';
    return this.http.post( url, user ).pipe( map( (resp: any) => {

     this.saveLocalStorage( resp );

      return true;

    }));

  }

  loginGoogle( token: string ) {
    const url = URL_SERVICES + '/login/google/';
    return this.http.post( url, { token } ).pipe( map( (resp: any) => {

      this.saveLocalStorage( resp );

       return true;

     }));
  }

  addUser(user: User) {
    const url = URL_SERVICES + '/usuario';
    return this.http.post( url, user ).pipe( map ( (resp: any) => {
      swal('User added', user.email, 'success');
      return resp.user;
    } ));
  }

  logout() {
    this.user = null;
    this.token = '';
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
