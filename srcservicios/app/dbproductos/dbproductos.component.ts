import { Component, OnInit } from '@angular/core';

import { DbproductosService } from '../dbproductos.service';

@Component({
  selector: 'app-dbproductos',
  templateUrl: './dbproductos.component.html',
  styleUrls: ['./dbproductos.component.css']
})
export class DbproductosComponent implements OnInit {

  productos = null; 

  constructor( private dbprodservice : DbproductosService) { }

  ngOnInit() {
  	this.dbprodservice.retornarProductosAjax()
  		.subscribe(
  			result => {
  				this.productos = result;
  			},
  			error => {
  				console.log("Hubo un error", error);
  			}
  		);
  }

}
