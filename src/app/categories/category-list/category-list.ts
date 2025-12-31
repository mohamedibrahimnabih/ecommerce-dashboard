import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-service';
import { CategoryModel } from '../category-model';
import { Router, RouterLink } from '@angular/router';
import { ModelFilter } from "../../shared/model-filter/model-filter";

@Component({
  selector: 'app-category-list',
  imports: [RouterLink, ModelFilter],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList implements OnInit {

  categories!: CategoryModel[];

  currentPage = 1;
  totalPages = 0;
  filterValue = '';

  constructor(private categoryService: CategoryService) {
    this.loadData();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.categoryService.getCategories(this.filterValue, this.currentPage)
    .subscribe(result => {
      this.categories = result.categories;
      this.totalPages = result.totalPages;
      this.currentPage = result.currentPage;
    });
  }

  changePage(page: number){
    if(page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    this.loadData();
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(() => {
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