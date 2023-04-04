import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  paises: any[] = [];
  loading: boolean = false;
  @Input() soloFavorito: boolean = false;

  constructor(private countries: CountriesService) {
    this.getCountries();
  }

  getCountries(): void {

    this.paises = [];
    this.loading = true;

    this.countries.getAllCountries()
      .subscribe((data: any) => {
        if (this.soloFavorito) {
          this.filtrarFavoritos(data);
        } else {
          this.filtrarSinFavoritos(data);
        }

        this.loading = false;
      });
  }

  filtrarFavoritos(data: any){
    for (let i = 0; i < data.length; i++) {
      if (localStorage.getItem(data[i].capital) != null) {
        this.paises.push(data[i]);
      }
    }
  }

  filtrarSinFavoritos(data: any){
    for (let i = 0; i < data.length; i++) {
      if (localStorage.getItem(data[i].capital) == null) {
        this.paises.push(data[i]);
      }
    }
  }

  buscar(termino: string) {

    this.paises = [];
    this.loading = true;

    if (termino.length > 0) {

      this.countries.getSearchName(termino)
        .subscribe((data: any) => {
          if (this.soloFavorito) {
            this.filtrarFavoritos(data);
          } else {
            this.filtrarSinFavoritos(data);
          }

        });
    } else {

      this.countries.getAllCountries()
        .subscribe((data: any) => {

          if (this.soloFavorito) {
            this.filtrarFavoritos(data);
          } else {
            this.filtrarSinFavoritos(data);
          }

        });
    }
    this.loading = false;
  }
}