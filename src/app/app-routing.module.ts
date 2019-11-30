import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { AcercadeComponent } from './acercade/acercade.component';

import { Pagina404Component } from './pagina404/pagina404.component';


const routes: Routes = [
	{
		path: 'acercade',
		component: AcercadeComponent
	},
	{
		path: 'productos',
		component: ProductosComponent
	},
	{
		path: 'servicios',
		component: ServiciosComponent
	},
	{
		path: '',
		redirectTo: '/servicios',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: Pagina404Component
	}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
