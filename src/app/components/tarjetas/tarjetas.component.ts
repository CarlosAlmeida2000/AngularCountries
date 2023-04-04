import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

  @Input() items: any[] = [];
  @Output() private eventoActualizar = new EventEmitter();
  
  changeFavorite(countryName: string, checkbox: HTMLInputElement){
    
    if(checkbox.checked){
      // registra país como favoritos
      localStorage.setItem(countryName, String(checkbox.checked));
    }else{
      // eliminar el país de mis favoritos
      localStorage.removeItem(countryName);
    }
    // emite un evento donde se llama la funcion para refrescar la lista de países
    this.eventoActualizar.emit();
  }

  isFavorite(countryName: string){
    return localStorage.getItem(countryName) == null? false:true;
  }
}