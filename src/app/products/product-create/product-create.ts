import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { ProductModel } from '../product-model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryModel } from '../../categories/category-model';
import { CategoryService } from '../../categories/category-service';
import { BrandModel } from '../../brands/brand-model';
import { BrandService } from '../../brands/brand-service';

@Component({
  selector: 'app-product-create',
  imports: [FormsModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.css',
})
export class ProductCreate {

  product: ProductModel = { 
    id: 0,
    name: '',
    description: '',
    price: 0,
    discount: 0,
    quantity: 0,
    imageUrl: '',
    categoryId: 0,
    brandId: 0,
    status : true,
    SubImages: [],
    Colors: []
  };
  
  categories : CategoryModel[] = [];
  brands : BrandModel[] = [];

  mainImg!: File;
  subImgs: File[] = [];

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private router: Router) 
  {
    this.categories = categoryService.getCategories();
    this.brands = brandService.getBrands();
  }

  onMainImgSelected(event: any) {
    this.mainImg = event.target.files[0];
  }

  onSubImagesSelected(event: any) {
    this.subImgs = Array.from(event.target.files);
  }

  save() {
    this.product.id = Math.floor(Math.random() * 10000);
    this.productService.addProduct(this.product);

    this.router.navigate(['/products']);
  }
}
