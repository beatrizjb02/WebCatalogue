import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductDescriptionComponent } from './page/product-description/product-description.component';

const routes: Routes = [
  {
    path: 'description',
    component: HomeComponent,
  },
  {
    path: 'tienda',
    component: HomeComponent,
  },
  { path: 'productDescription/:id', component: ProductDescriptionComponent },
  {
    path: '**',
    redirectTo: 'home/tienda',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueRoutingModule {}
