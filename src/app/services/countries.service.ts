import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }


  getAllCountries( ) {

    const url = 'https://restcountries.com/v3.1/all';

    return this.http.get(url);
  }

  getSearchName(name: string){

    const url = `https://restcountries.com/v3.1/name/${name}`;

    return this.http.get(url);
  }
}
