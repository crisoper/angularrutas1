
import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

	private productos = null;

  constructor( private http: HttpClient ) { }

  ngOnInit() {

  	this.http.get("http://scratchya.com.ar/vue/datos.php")
  	.subscribe(
  			result=>{
  				this.productos = result;
  			},
  			error=>{
  				console.log("Hubo un error", error);
  			}
  			
  		);
  }

}
