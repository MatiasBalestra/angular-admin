import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {

    /*     ./assets/css/colors/default-dark.css */


    if (localStorage.getItem('theme')) {
      const url = localStorage.getItem('theme') ?? './assets/css/colors/default-dark.css';
      this.linkTheme?.setAttribute('href', url);
    } else {
      this.linkTheme?.setAttribute('href', './assets/css/colors/default-dark.css');
    }

  }

}
