import { Component, OnInit } from '@angular/core';
import { FelinosService } from 'src/app/services/felinos.service';

@Component({
  selector: 'app-buscador-felinos',
  templateUrl: './buscador-felinos.component.html',
  styleUrls: ['./buscador-felinos.component.css']
})
export class BuscadorFelinosComponent implements OnInit {

  public felinos: any = [];
  public felinoSelected: any = {};

  constructor(private serviceFelinos: FelinosService) { }

  ngOnInit(): void {
    this.obtenerFelinos();
  }

  // Funcion para obtener todos los felinos
  obtenerFelinos() {
    this.serviceFelinos.getFelinos()
    .then(response => {
      this.felinos = response;
      this.filtroBusqueda('abys');
      // console.log(this.felinos);
    }).catch(error => { console.log('error al obtener felinos', error); });
  }

  // Funcion de otra forma de obtener el felino por id
  filtroBusqueda(id: string) {
    this.felinos.forEach(felino => {
      if (felino.id === id) {
        this.felinoSelected = felino;
        // console.log(this.felinoSelected);
      }
    });
  }
}
