import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class ProductList implements OnInit {

  products!: ProductModel[];

  currentPage = 1;
  totalPages = 0;
  filterValue = '';

  constructor(private productService: ProductService, private cdr : ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productService.getProducts(this.filterValue, this.currentPage)
    .subscribe(result => {
      this.products = result.products;
      this.currentPage = result.currentPage;
      this.totalPages = result.totalPages;
      console.log("get all product");
      this.cdr.detectChanges();
    })
  }

  changePage(page: number){
    if(page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    this.loadData();
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
    .subscribe(() => {
      this.currentPage = 1;
      this.loadData();
    })
  }

  onFilter(value: string) {
    this.filterValue = value;

    this.currentPage = 1;
    this.loadData();
  }
}
