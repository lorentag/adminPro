import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_pluggins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberme = false;
  email: string;

  auth2: any;

  constructor(public router: Router, public userService: UserService) { }

  ngOnInit() {
    init_pluggins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.rememberme = true;
    }
  }

  login( form: NgForm ) {

    if (form.invalid) {
      return;
    }

    const user = new User( null, form.value.email, form.value.password );

    this.userService.login( user, this.rememberme ).subscribe( resp => {
      this.router.navigate( ['/dashboard'] );
    });

  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '1073933472147-nufpra3j5pcd9e3sc0rn3e4sluk5munl.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
    });

     this.attachSignin( document.getElementById('btnGoogle') );

    });
  }

  attachSignin( element ) {
    this.auth2.attachClickHandler( element, {}, googleUser => {

     // const profile = googleUser.getBasicProfile();
     // console.log( profile );
     const token = googleUser.getAuthResponse().id_token;
     this.userService.loginGoogle( token ).subscribe( () => {
      this.router.navigate( ['/dashboard'] );
     });

    });
  }

}
