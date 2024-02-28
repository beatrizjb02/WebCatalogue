import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../interface/product.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl: string = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Product[]>(url);
  }

  // getCategory(category: string): Observable<Product[]> {
  //   const url = `${this.apiUrl}?category=${category}`;
  //   return this.http.get<Product[]>(url);
  // }
}
