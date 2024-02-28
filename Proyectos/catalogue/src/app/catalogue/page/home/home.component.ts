import { Component, Input } from '@angular/core';
import { Category, Product } from '../../interface/product.interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.getProducts();
  // }
  // public categories:string[]=Object.values(Category);
  // public categoriesProducts: Product[] = [];
  // public allProducts: Product[] = [];

  // getProducts(): void {
  //   this.productService.getProducts().subscribe((products) => {
  //     this.allProducts = products;
  //     this.categoriesProducts=products;
  //   });
  // }
}
