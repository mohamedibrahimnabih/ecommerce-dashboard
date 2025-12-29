import { Component } from '@angular/core';
import { CategoryService } from '../category-service';
import { CategoryModel } from '../category-model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-create',
  imports: [FormsModule],
  templateUrl: './category-create.html',
  styleUrl: './category-create.css',
})
export class CategoryCreate {

  category: CategoryModel = { id: 0, name: '', description: '', isActive: true };

  constructor(private categoryService: CategoryService, private router: Router) { }

  save() {
    this.category.id = Math.floor(Math.random() * 10000);
    this.categoryService.addCategory(this.category);

    this.router.navigate(['/categories']);
  }
}
