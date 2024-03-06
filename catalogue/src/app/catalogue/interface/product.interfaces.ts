export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  image:       string;
  rating:      Rating;
}

export enum Category {
  Electronics = "Electronics",
  Jewelery = "Jewelery",
  MenSClothing = "Men's clothing",
  WomenSClothing = "Women's clothing",
}

export interface Rating {
  rate:  number;
  count: number;
}
