import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../sevices/settings.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {


  constructor(private settingService: SettingsService,) { }

  ngOnInit(): void {

    customInitFunctions();


  }

}
