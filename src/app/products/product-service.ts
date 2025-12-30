import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  products: ProductModel[] = [];

  constructor() 
  {
    // Sample product data
    this.products = [
      {
        id: 1,
        name: 'Sample Product 1',
        description: 'This is a sample product description.',
        price: 29.99,
        quantity: 100,
        discount: 10,
        imageUrl: 'https://example.com/image1.jpg',
        SubImages: ['https://example.com/image1a.jpg', 'https://example.com/image1b.jpg'],
        Colors: ['Red', 'Blue', 'Green'],
        categoryId: 1,
        brandId: 1,
        status: true,
      },
      {
        id: 2,
        name: 'Sample Product 2',
        description: 'This is another sample product description.',
        price: 49.99,
        quantity: 50,
        discount: 15,
        imageUrl: 'https://example.com/image2.jpg',
        SubImages: ['https://example.com/image2a.jpg', 'https://example.com/image2b.jpg'],
        Colors: ['Black', 'White'],
        categoryId: 2,
        brandId: 2,
        status: true,
      },
      {
        id: 3,
        name: 'Sample Product 3',
        description: 'This is yet another sample product description.',
        price: 19.99,
        quantity: 200,
        discount: 5,
        imageUrl: 'https://example.com/image3.jpg',
        SubImages: ['https://example.com/image3a.jpg', 'https://example.com/image3b.jpg'],
        Colors: ['Yellow', 'Purple'],
        categoryId: 1,
        brandId: 3,
        status: false,
      }
    ];
  }

  getProducts(): ProductModel[] {
    return this.products;
  }

  getProductById(id: number): ProductModel | undefined {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: ProductModel): void {
    this.products.push(product);
  }

  updateProduct(updatedProduct: ProductModel): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}