// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CategoryModel } from '../category-model';
// import { CategoryService } from '../category-service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-category-update',
//   imports: [FormsModule],
//   templateUrl: './category-update.html',
//   styleUrl: './category-update.css',
// })
// export class CategoryUpdate {
//   category!: CategoryModel;

//   constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) {
//   }

//   ngOnInit(): void {
//     const categoryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
//     const result = this.categoryService.getCategoryById(categoryId);

//     if(result){
//       this.category = { ...result };
//     }
//   }

//   update() {
//     this.categoryService.updateCategory(this.category);

//     this.router.navigate(['/categories']);
//   }
// }
