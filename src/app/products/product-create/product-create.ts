import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class ProductCreate implements OnInit {

  productName: string = '';
  productDescription: string = '';
  productPrice: number = 0;
  productDiscount: number = 0;
  productQuantity: number = 0;
  productMainImg: File | null = null;
  productCategoryId: number | null = null;
  productBrandId: number | null = null;
  productStatus: boolean = true;
  productSubImgs: File[] = [];
  productColors: string[] = [];
  newColor: string = '';

  categories: CategoryModel[] = [];
  brands: BrandModel[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private router: Router,
    private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadCategoryData();
    this.loadBrandData();
  }

  loadCategoryData() {
    this.categoryService.getCategories()
      .subscribe(result => {
        this.categories = result.categories;
        this.cdr.detectChanges();
      });
  }

  loadBrandData() {
    this.brandService.getBrands()
      .subscribe(result => {
        this.brands = result.brands;
        this.cdr.detectChanges();
      });
  }

  onMainImgSelected(event: any) {
    this.productMainImg = event.target.files[0];
  }

  onSubImagesSelected(event: any) {
    this.productSubImgs = Array.from(event.target.files) as File[];
  }

  addColor(){
  if(this.newColor && this.newColor.trim()) {
    this.productColors.push(this.newColor.trim());
    this.newColor = '';
  }
}

  save() {

    const formData = new FormData();

    formData.append('Name', this.productName);
    formData.append('Description', this.productDescription);
    formData.append('Price', this.productPrice.toString());
    formData.append('Discount', this.productDiscount.toString());
    formData.append('Quantity', this.productQuantity.toString());
    formData.append('Status', this.productStatus.toString());
    formData.append('CategoryId', this.productCategoryId?.toString() || '');
    formData.append('BrandId', this.productBrandId?.toString() || '');

    // Main Img
    if (this.productMainImg)
      formData.append('MainImg', this.productMainImg, this.productMainImg.name);

    // Sub Imgs
    if (this.productSubImgs && this.productSubImgs.length > 0) {
      this.productSubImgs.forEach((file, index) => {
        formData.append('SubImages', file, file.name);
      })
    }

    // Colors
    if (this.productColors && this.productColors.length > 0) {
      this.productColors.forEach((color, index) => {
        formData.append('Colors', color);
      })
    }

    this.productService.addProduct(formData)
    .subscribe({
      next: (result) => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Error details:', err);
        console.error('Error response:', err.error);
        alert('Error: ' + (err.error?.message || JSON.stringify(err.error)));
      }
    });
  }
}
