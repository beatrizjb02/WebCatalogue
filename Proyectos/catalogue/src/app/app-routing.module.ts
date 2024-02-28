import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './catalogue/page/home/home.component';
import { ProductComponent } from './catalogue/components/product/product.component';
import { FilterComponent } from './catalogue/components/filter/filter.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'products',
    component:ProductComponent
  },
  {
    path:'filter',
    component:FilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
