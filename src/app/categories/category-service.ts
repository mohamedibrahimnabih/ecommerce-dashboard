import { Injectable, OnInit } from '@angular/core';
import { CategoryModel } from './category-model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService /*implements OnInit*/ {
  categories: CategoryModel[];

  constructor() {
    this.categories = [
      { id: 1, name: 'Electronics', description: 'Gadgets and devices', isActive: true },
      { id: 2, name: 'Books', description: 'Printed and digital books', isActive: true },
      { id: 3, name: 'Clothing', description: 'Apparel and accessories', isActive: false },
    ];
  }

  // ngOnInit(): void {
  //   this.categories = [
  //     { id: 1, name: 'Electronics', description: 'Gadgets and devices', isActive: true },
  //     { id: 2, name: 'Books', description: 'Printed and digital books', isActive: true },
  //     { id: 3, name: 'Clothing', description: 'Apparel and accessories', isActive: false },
  //   ];
  // }

  getCategories(): CategoryModel[] {
    return this.categories;
  }

  getCategoryById(id: number): CategoryModel | undefined {
    return this.categories.find(category => category.id === id);
  }

  addCategory(category: CategoryModel): void {
    this.categories.push(category);
  }

  updateCategory(updatedCategory: CategoryModel): void {
    const index = this.categories.findIndex(category => category.id === updatedCategory.id);
    if (index !== -1) {
      this.categories[index] = updatedCategory;
    }
  }

  deleteCategory(id: number): void {
    this.categories = this.categories.filter(category => category.id !== id);
  }

}
