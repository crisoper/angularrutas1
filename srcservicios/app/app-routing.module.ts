import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { DbproductosComponent } from './dbproductos/dbproductos.component';

const routes: Routes = [

	{
		path: 'dbproductos',
		component: DbproductosComponent
	},
	{
		path: 'articulos',
		component: ArticulosComponent
	},
	{
		path: 'nosotros',
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
		path: 'acercade',
		component: AcercadeComponent
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
