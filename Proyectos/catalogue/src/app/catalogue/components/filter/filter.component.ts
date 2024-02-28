import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interface/product.interfaces';

@Component({
  selector: 'catalogue-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() categoryOption = new EventEmitter<string>();
  categories: string[] = Object.values(Category).filter(value => typeof value === 'string');

  constructor() {}

  categoryProducts(category: string): void {
    this.categoryOption.emit(category);
  }
}
