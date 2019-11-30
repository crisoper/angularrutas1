import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbproductosService {

  constructor( private httpclient : HttpClient ) { }

  retornarProductosAjax() {
  	return this.httpclient.get("http://scratchya.com.ar/vue/datos.php");
  }

}
