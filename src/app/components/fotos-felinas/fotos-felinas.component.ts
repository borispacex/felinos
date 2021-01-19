import { Component, OnInit } from '@angular/core';
import { FotosFelinasService } from 'src/app/services/fotos-felinas.service';

@Component({
  selector: 'app-fotos-felinas',
  templateUrl: './fotos-felinas.component.html',
  styleUrls: ['./fotos-felinas.component.css']
})
export class FotosFelinasComponent implements OnInit {

  public fotosFelinas: any = [];
  public imagenSelected: any = '';
  private indice: number = 0;

  constructor(private serviceFotosFelinas: FotosFelinasService) { }

  ngOnInit(): void {
    this.obtenerFotosFelinas();
  }

  // Funcion para obtener fotos felinas random
  obtenerFotosFelinas() {
    this.serviceFotosFelinas.getFotosFelinas()
    .then(response => {
      this.fotosFelinas = response;
      this.primero();
      // console.log(this.fotosFelinas);
    }).catch(error => { console.log('error al obtener fotos felinas', error); });
  }

  primero() {
    this.indice = 0;
    this.imagenSelected = this.fotosFelinas[this.indice].url;
  }

  anterior() {
    this.indice--;
    if (this.indice < 0) {
      this.indice = 17;
    }
    this.imagenSelected = this.fotosFelinas[this.indice].url;
  }

  siguiente() {
    this.indice++;
    if (this.indice > 17) {
      this.indice = 0;
    }
    this.imagenSelected = this.fotosFelinas[this.indice].url;
  }

  ultimo() {
    this.indice = 17;
    this.imagenSelected = this.fotosFelinas[this.indice].url;
  }

}
