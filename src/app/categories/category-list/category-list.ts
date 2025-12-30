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
export class CategoryList /*implements OnInit*/ {

  allCategories: CategoryModel[];
  categories!: CategoryModel[];

  currentPage = 1;
  pageSize = 5;
  totalPages = 0;

  constructor(private categoryService: CategoryService) {
    this.allCategories = this.categoryService.getCategories();

    this.pagination();
  }

  pagination()
  {
    this.totalPages = Math.ceil(this.allCategories.length / this.pageSize);

    const startIndex = (this.currentPage - 1) * this.pageSize; // 10
    const endIndex = startIndex + this.pageSize; // 15
    this.categories = this.allCategories.slice(startIndex, endIndex);
  }

  changePage(page: number)
  {
    if(page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    this.pagination();
  }

  // ngOnInit(): void {
  //   this.categories = this.categoryService.getCategories();
  // }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id);
    this.allCategories = this.categoryService.getCategories();

    this.currentPage = 1;
    this.pagination();
  }

  onFilter(value: string) {
    if(value === '')
      this.allCategories = this.categoryService.getCategories();

    this.allCategories = this.allCategories.filter(c=>c.name.toLowerCase().includes(value.trim().toLowerCase()));
    this.currentPage = 1;
    this.pagination();
  }
}