import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public userServices: UserService, public router: Router) {

  }

  canActivate() {

    if ( this.userServices.isLogged() ) {
      return true;
    } else {
      console.log('blocked by guard');
      this.router.navigate(['/login']);
      return false;
    }

  }

}
