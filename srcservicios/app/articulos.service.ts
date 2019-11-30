import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  getArticulos() {
  	return [

  		{
  			codigo: 1,
  			descripcion: 'Cuaderno A4',
  			precio: 5.90,
  			imagen: 'https://i.pravatar.cc/30'
  		},
  		{
  			codigo: 2,
  			descripcion: 'Rompecabezas',
  			precio: 12,
  			imagen: 'https://i.pravatar.cc/40'
  		},
  		{
  			codigo: 3,
  			descripcion: 'Mochila',
  			precio: 60,
  			imagen: 'https://i.pravatar.cc/42'
  		},
  		{
  			codigo: 4,
  			descripcion: 'Caja de plumones x 24 unidades',
  			precio: 12,
  			imagen: 'https://i.pravatar.cc/38'
  		}

  	];
  }

}
