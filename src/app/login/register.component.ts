import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare function init_pluggins();


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit() {
    init_pluggins();

    this.form = new FormGroup({
      name: new FormControl( null, [Validators.required] ),
      email: new FormControl( null, [Validators.required, Validators.email]),
      password: new FormControl( null, [Validators.required] ),
      password2: new FormControl( null, [Validators.required] ),
      conditions: new FormControl(false)
    }, { validators: this.equals('password', 'password2') } );

    this.form.setValue({
      name: 'test',
      email: 'test@test.com',
      password: '123456',
      password2: '123456',
      conditions: true
    });

  }

  equals(field1: string, field2: string) {

    return ( group: FormGroup ) => {

      const pass1 = group.controls[field1].value;
      const pass2 = group.controls[field2].value;

      if ( pass1 === pass2) {
         return null;
      } else {

        return {
          equals: true
        };

      }

   };
  }

  userRegister() {

    if ( this.form.invalid) {
      return;
    }

    if ( !this.form.value.conditions ) {
      swal('Important!', 'The conditions must be acepted', 'warning');
      return;
    }

    const user = new User(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    );

    this.userService.addUser( user ).subscribe( resp => {

      this.router.navigate(['/login']);

    });

  }

}
