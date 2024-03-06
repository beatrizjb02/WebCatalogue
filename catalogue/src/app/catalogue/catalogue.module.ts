import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './page/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductComponent } from './components/product/product.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProductDescriptionComponent } from './page/product-description/product-description.component';


@NgModule({
  declarations: [
    ProductComponent,
    FilterComponent,
    HomeComponent,
    ProductDescriptionComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    CatalogueRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule

  ],
  exports: [HomeComponent],
})
export class CatalogueModule {}
