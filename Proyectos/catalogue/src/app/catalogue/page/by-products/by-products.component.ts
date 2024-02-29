import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interface/product.interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-by-products',
  templateUrl: './by-products.component.html',
  styleUrls: ['./by-products.component.scss']
})
export class ByProductsComponent implements OnInit {
  @Input()
  public products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }}
