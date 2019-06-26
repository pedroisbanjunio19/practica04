import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-style',
  templateUrl: './directiva-ng-style.component.html',
  styleUrls: ['./directiva-ng-style.component.css']
})
export class DirectivaNgStyleComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit() {
  }

  colorPuntuacion() {
    return this.puntuacion >= 5 ? 'green' : 'red';
  }

  bordePuntuacion() {
    if (this.puntuacion) {
      return this.puntuacion >= 5 ? '1px solid green' : '1px solid red';
    }
  }

}
