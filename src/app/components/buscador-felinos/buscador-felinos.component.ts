import { Component, OnInit } from '@angular/core';
import { FelinosService } from 'src/app/services/felinos.service';

@Component({
  selector: 'app-buscador-felinos',
  templateUrl: './buscador-felinos.component.html',
  styleUrls: ['./buscador-felinos.component.css']
})
export class BuscadorFelinosComponent implements OnInit {

  public felinos: any = [];
  public felinoSelected: any = {
    image: {
      url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'
    }
  };

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

  // Funcion para obtener el felino por id
  obtenerFelinoById(id: string) {
    this.serviceFelinos.getFelinoById(id)
    .then(response => {
      this.felinoSelected = response[0].breeds[0];
      // console.log(this.felinoSelected);
    }).catch(error => { console.log('error al obtener felino por ID', error); });
  }

  // Funcion de otra forma de obtener el felino por id
  filtroBusqueda(id: string) {
    for (let i = 0; i < this.felinos.length; i++) {
      if (this.felinos[i].id === id) {
        this.felinoSelected = this.felinos[i];
        // console.log(this.felinos[i]);
      }
    }
  }

}
