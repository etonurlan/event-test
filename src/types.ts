export interface Products {
  items: Product[];
}

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}