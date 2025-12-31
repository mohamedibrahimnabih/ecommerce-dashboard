import { Component } from '@angular/core';
import { ProductModel } from '../product-model';
import { ProductService } from '../product-service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ModelFilter } from '../../shared/model-filter/model-filter';
import { Pagination } from '../../shared/pagination/pagination';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, CurrencyPipe, ModelFilter, Pagination],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  allProducts: ProductModel[] = [];
  products: ProductModel[] = [];

  currentPage = 1;
  pageSize = 5;

  constructor(private productService: ProductService) {
    this.allProducts = this.productService.getProducts();

    this.pagination();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.allProducts = this.productService.getProducts();

    this.currentPage = 1;
    this.pagination();
  }
  
  pagination()
  {
    const startIndex = (this.currentPage - 1) * this.pageSize; // 10
    const endIndex = startIndex + this.pageSize; // 15
    this.products = this.allProducts.slice(startIndex, endIndex);
  }

  onPageChanged(page: number){
    this.currentPage = page;
    this.pagination();
  }

  onFilter(value: string) {
    if(value === '')
      this.allProducts = this.productService.getProducts();

    this.allProducts = this.allProducts.filter(c=>c.name.toLowerCase().includes(value.trim().toLowerCase()));
    this.currentPage = 1;
    this.pagination();
  }
}
