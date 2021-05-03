import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotFondComponent} from './page-not-fond/page-not-fond.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // componente que posee los componentes que se repiten
    children: [ //rutas hijas
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import ('./home/home.module').then(m => m.HomeModule),
      },
      {
        path:'products',
        component: ProductsComponent
      },
      {
        path:'products/:id',
        component:ProductDetailComponent
      },
      {
        path:'contact',
        component: ContactComponent
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
