import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-if',
  templateUrl: './directiva-ng-if.component.html',
  styleUrls: ['./directiva-ng-if.component.css']
})
export class DirectivaNgIfComponent implements OnInit {

  repositorio = 'code14';
  repositorioCheck: string;
  capital: string;
  // mostrado = true;

  constructor() { }

  ngOnInit() {
  }

  setResultado() {
    return this.capital.toLowerCase() === 'madrid' ? true : false;
  }

}
