import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(img: string, type: string = 'user'): any {

    const url = URL_SERVICES + '/images';

    if (!img) {
        return url + '/users/xxx';
    }

    if ( img.indexOf('https') >= 0 ) {
       return img;
    }

    switch (type) {
      case 'user':
        return url + '/users/' + img;
      case 'medic':
        return url + '/medics/' + img;
      case 'hospital':
        return url + '/hospitals/' + img;
      default:
        console.log('type doesnt exist. Types: user, medic, hospital');
        return url + '/users/xxx';

    }


  }

}
