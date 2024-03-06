import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product.interfaces';

@Component({
  selector: 'catalogue-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() categoryOption = new EventEmitter<Product[]>();

  public categories: string[] = [];
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getCategory().subscribe((data: string[]) => {
      this.categories = data;
      this.categories.unshift('All');
      // console.log(this.categories);
    });

    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      // console.log(this.products);
    });
  }

  categoryProducts(category: string): void {
    if (category === 'All') {
      this.categoryOption.emit(this.products);
    } else {
      const optionCategory = this.products.filter(
        (product: Product) => product.category === category
      );
      this.categoryOption.emit(optionCategory);
    }
  }
}
