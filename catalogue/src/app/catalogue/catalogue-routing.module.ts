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
    path: 'catalogue',
    component: HomeComponent,
  },
  { path: 'productDescription/:id', component: ProductDescriptionComponent },
  {
    path: '**',
    redirectTo: 'home/catalogue',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueRoutingModule {}
