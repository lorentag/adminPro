import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document, public _settings: SettingsService) { }

  ngOnInit() {
    this.checkRestore();
  }

  colorChange(theme: string, link: any ) {
    this._settings.themeApply( theme );
    this.checkApply( link );
  }

  checkApply(link: any) {

    const selectors: any = document.getElementsByClassName('selector');

    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  checkRestore() {

    const selectors: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;

    for ( const ref of selectors ) {
       if (ref.getAttribute('data-theme') === theme) {
         ref.classList.add('working');
         break;
       }
    }

  }

}
