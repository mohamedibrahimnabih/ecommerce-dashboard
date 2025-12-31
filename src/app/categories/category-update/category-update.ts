import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryModel } from '../category-model';
import { CategoryService } from '../category-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-update',
  imports: [FormsModule],
  templateUrl: './category-update.html',
  styleUrl: './category-update.css',
})
export class CategoryUpdate {
  category: CategoryModel = { id: 0, name: "", status: false };

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const categoryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (categoryId) {
      this.categoryService.getCategoryById(categoryId)
        .subscribe({
          next: (result) => {
            this.category = result;
          },
          error: (err) => {
            console.log(err);
            alert('Error');
          }
        })
    }
  }

  update() {
    if(!this.category) return;

    this.categoryService.updateCategory(this.category.id, this.category)
      .subscribe({
        next: () => {
          this.router.navigate(['/categories']);
        },
        error: (err) => {
          console.log(err);
          alert('Error');
        }
      })
  }
}
