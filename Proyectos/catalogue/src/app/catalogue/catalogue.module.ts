import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './page/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductComponent } from './components/product/product.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [ProductComponent, FilterComponent, HomeComponent],
  imports: [CommonModule, MatToolbarModule, MatSelectModule, MatCardModule],
  exports: [HomeComponent],
})
export class CatalogueModule {}
