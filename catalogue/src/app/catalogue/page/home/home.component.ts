import { Component } from '@angular/core';
import { Product } from '../../interface/product.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  public products:Product[]=[];
  getCategoryOptions(categoryOptions:Product[]){
    this.products=categoryOptions;

  }
}
