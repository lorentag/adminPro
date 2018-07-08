import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  img: File;
  imgTemp: File;

  constructor(public userService: UserService) {
      this.user = this.userService.user;
  }

  ngOnInit() {
  }

  saveUser( user: User ) {

    if (!this.user.google) {
     this.user.name = user.name;
     this.user.email = user.email;

     this.userService.updateUser( this.user ).subscribe();
    }

  }

  handleImg( file: File ) {

    if ( !file ) {
    this.img = null;
     return;
    }

    if ( file.type.indexOf('image') < 0 ) {
        swal('Only Images', 'The file selected must be a image', 'error');
        this.img = null;
        return;
    }

    this.img = file;

    const reader = new FileReader();
    const urlImgTemp = reader.readAsDataURL( file );
    reader.onloadend = () => {
       this.imgTemp = reader.result;
    };

  }

  uploadImg() {

    this.userService.updateImg( this.img, this.user._id );

  }

}
