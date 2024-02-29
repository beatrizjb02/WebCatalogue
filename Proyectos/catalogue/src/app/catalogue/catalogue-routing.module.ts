import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByProductsComponent } from './page/by-products/by-products.component';
import { HomeComponent } from './page/home/home.component';
import { ProductDescriptionComponent } from './page/product-description/product-description.component';

const routes: Routes = [
  {
    path: 'description',
    component: ByProductsComponent,
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
