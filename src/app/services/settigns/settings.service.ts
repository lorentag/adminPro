import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

settings: Settings = {
  urlTheme: 'assets/css/colors/default.css',
  theme: 'default'
};

  constructor() {
    this.loadSettings();
  }

 saveSettings() {
   localStorage.setItem('settings', JSON.stringify(this.settings));
 }

 loadSettings() {
   if (localStorage.getItem('settings')) {
     this.settings = JSON.parse( localStorage.getItem('settings') );
     this.themeApply(this.settings.theme);
   } else {
     this.themeApply(this.settings.theme);
   }
 }

 themeApply(theme: string) {
  const url = `assets/css/colors/${ theme }.css`;
  document.getElementById('theme').setAttribute( 'href', url );
  this.settings.theme = theme;
  this.settings.urlTheme = theme;
  this.saveSettings();
}


}

interface Settings {
  urlTheme: string;
  theme: string;
}
