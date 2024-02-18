export interface Campaign {
  id: number;
  title: string;
  image: string;
  code: string;
}
export interface Product {
  id: number;
  name: string;
  kind: string;
  category: string;
  price: string;
  image: string;
  desc: string;
  reviews: number;
  longDesc: string;
  availableColors: string[];
  images: string[];
}
