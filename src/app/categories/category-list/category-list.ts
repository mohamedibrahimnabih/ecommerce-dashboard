import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-service';
import { CategoryModel } from '../category-model';

@Component({
  selector: 'app-category-list',
  imports: [],
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
}
