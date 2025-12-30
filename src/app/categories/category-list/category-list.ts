import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category-service';
import { CategoryModel } from '../category-model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  imports: [RouterLink],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList /*implements OnInit*/ {

  categories: CategoryModel[];

  constructor(private categoryService: CategoryService, private router: Router) {
    this.categories = this.categoryService.getCategories();
  }

  // ngOnInit(): void {
  //   this.categories = this.categoryService.getCategories();
  // }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id);
    this.categories = this.categoryService.getCategories();
  }

  filter(name: string) {
    this.categories = this.categories.filter(c=>c.name.toLowerCase().includes(name.trim().toLowerCase()))
  }

  resetFilter() {
    this.categories = this.categoryService.getCategories();

    this.router.navigate(['/categories']);
  }
}