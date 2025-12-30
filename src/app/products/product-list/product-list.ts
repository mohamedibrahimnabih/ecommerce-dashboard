import { Component } from '@angular/core';
import { ProductModel } from '../product-model';
import { ProductService } from '../product-service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ModelFilter } from '../../shared/model-filter/model-filter';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, CurrencyPipe, ModelFilter],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products: ProductModel[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  onFilter(value: string) {
    if(value === '')
      this.products = this.productService.getProducts();

    this.products = this.products.filter(p=>p.name.toLowerCase().includes(value.trim().toLowerCase()));
  }
}
