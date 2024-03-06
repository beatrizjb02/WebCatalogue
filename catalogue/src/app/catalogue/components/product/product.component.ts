import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'catalogue-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  public products: Product[] = [];
  public ifDescription:boolean = false;
  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute,) {}

  ngOnInit(): void {
    this.getProducts();
    this.activatedRoute.url.subscribe(url => {
      this.ifDescription = url.toString().includes('description');
    });
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
