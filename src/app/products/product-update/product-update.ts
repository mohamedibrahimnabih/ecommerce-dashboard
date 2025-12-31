// import { Component } from '@angular/core';
// import { ProductService } from '../product-service';
// import { ProductModel } from '../product-model';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CategoryModel } from '../../categories/category-model';
// import { CategoryService } from '../../categories/category-service';
// import { BrandModel } from '../../brands/brand-model';
// import { BrandService } from '../../brands/brand-service';
// import { NgIf } from '@angular/common';

// @Component({
//   selector: 'app-product-update',
//   imports: [FormsModule, NgIf],
//   templateUrl: './product-update.html',
//   styleUrl: './product-update.css',
// })
// export class ProductUpdate {
//   product!: ProductModel;

//   categories : CategoryModel[] = [];
//   brands : BrandModel[] = [];

//   mainImg!: File;
//   subImgs: File[] = [];

//   constructor(private productService: ProductService,
//     private categoryService: CategoryService,
//     private brandService: BrandService,
//     private router: Router,
//     private activatedRoute: ActivatedRoute) 
//     {
//       this.categories = categoryService.getCategories();
//       this.brands = brandService.getBrands();
//     }

//   ngOnInit() {
//     const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
//     const result = this.productService.getProductById(id);
//     if (result) {
//       this.product = {...result};
//     }
//   }

//   onMainImgSelected(event: any) {
//     this.mainImg = event.target.files[0];
//   }

//   onSubImagesSelected(event: any) {
//     this.subImgs = Array.from(event.target.files);
//   }

//   update() {
//     this.productService.updateProduct(this.product);
//     this.router.navigate(['/products']);
//   }
// }
