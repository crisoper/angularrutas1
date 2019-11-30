import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { DbproductosComponent } from './dbproductos/dbproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    ProductosComponent,
    AcercadeComponent,
    Pagina404Component,
    ArticulosComponent,
    DbproductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
