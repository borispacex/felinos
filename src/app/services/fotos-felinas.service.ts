import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotosFelinasService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://api.thecatapi.com/v1/images/search?limit=18&mime_types=&order=Random&size=small&page=0&category _ids=1&sub_id=demo-b7e1c3';
  }

  // Obtener todos los felinos
  getFotosFelinas() {
    return this.httpClient.get<any>(this.url).toPromise()
    .then(res => res);
  }
}
