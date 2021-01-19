import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FelinosService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://api.thecatapi.com/v1/';
  }

  // Obtener todos los felinos
  getFelinos() {
    return this.httpClient.get<any>(this.url + 'breeds').toPromise()
    .then(res => res);
  }

  // Obtener el felino por id
  getFelinoById(id: string) {
    return this.httpClient.get<any>(this.url + 'images/search?breed_ids=' + id).toPromise()
    .then(res => res);
  }
}
