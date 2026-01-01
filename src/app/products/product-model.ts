export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  discount: number;
  mainImg: string;
  SubImages?: string[];
  Colors?: string[];
  categoryId: number;
  brandId: number;
  status: boolean;
}
