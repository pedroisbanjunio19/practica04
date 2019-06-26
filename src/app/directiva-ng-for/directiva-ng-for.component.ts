import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  clientes: Cliente[] = [
    new Cliente('Juan Pérez', [{calle: 'Av España, 3', ciudad: 'Sevilla'}, {calle: 'Av Portugal, 5', ciudad: 'Madrid'}] ),
    new Cliente('Fernando López', [{calle: 'Paseo Roma, 3', ciudad: 'Sevilla'}, {calle: 'Antonio Machado, 12', ciudad: 'Madrid'}] ),
    new Cliente('Juan Fernández', [{calle: 'Paseo Castellana, 5', ciudad: 'Madrid'}] )
  ];

  constructor() { }

  ngOnInit() {
  }

}
