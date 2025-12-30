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

  categories: CategoryModel[];

  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.getCategories();
  }

  // ngOnInit(): void {
  //   this.categories = this.categoryService.getCategories();
  // }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id);
    this.categories = this.categoryService.getCategories();
  }

  onFilter(value: string) {
    if(value === '')
      this.categories = this.categoryService.getCategories();

    this.categories = this.categories.filter(c=>c.name.toLowerCase().includes(value.trim().toLowerCase()));
  }
}