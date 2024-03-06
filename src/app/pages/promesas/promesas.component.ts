import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios =>
      console.log(usuarios))
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
      });;


  }

  getUsuarios() {

    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://reqres.in/api/users')
          .then(resp => resp.json()
            .then(body => resolve(body.data)))
          .catch(error => reject(error));;
      }, 9000);
    });

    return promesa;

  }

}

