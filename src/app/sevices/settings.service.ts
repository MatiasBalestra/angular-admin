import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');


  constructor() {
    if (localStorage.getItem('theme')) {
      const url = localStorage.getItem('theme') ?? './assets/css/colors/default-dark.css';
      this.linkTheme?.setAttribute('href', url);
    } else {
      this.linkTheme?.setAttribute('href', './assets/css/colors/default-dark.css');
    }
  }


  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);

    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }


  checkCurrentTheme() {

    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

    links.forEach(elemen => {
      elemen.classList.remove('working');
      const btnTheme = elemen.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elemen.classList.add('working');
      }
    })

  }

}
