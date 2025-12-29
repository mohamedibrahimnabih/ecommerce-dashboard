import { Injectable } from '@angular/core';
import { BrandModel } from './brand-model';

@Injectable({
  providedIn: 'root',
})
export class BrandService /*implements OnInit*/ {
  brands: BrandModel[];

  constructor() {
    this.brands = [
      { id: 1, name: 'Apple', logoUrl: 'https://dummyimage.com/300', description: 'Gadgets and devices', isActive: true },
      { id: 2, name: 'Samsung', logoUrl: 'https://dummyimage.com/300', description: 'Printed and digital books', isActive: true },
      { id: 3, name: 'Dell', logoUrl: 'https://dummyimage.com/300', description: 'Apparel and accessories', isActive: false },
    ];
  }

  // ngOnInit(): void {
  //   this.categories = [
    //   { id: 1, name: 'Apple', logoUrl: 'electronics-logo.png', description: 'Gadgets and devices', isActive: true },
    //   { id: 2, name: 'Samsung', logoUrl: 'books-logo.png', description: 'Printed and digital books', isActive: true },
    //   { id: 3, name: 'Dell', logoUrl: 'clothing-logo.png', description: 'Apparel and accessories', isActive: false },
    // ];
  // }

  getBrands(): BrandModel[] {
    return this.brands;
  }

  getBrandById(id: number): BrandModel | undefined {
    return this.brands.find(brand => brand.id === id);
  }

  addBrand(brand: BrandModel): void {
    this.brands.push(brand);
  }

  updateBrand(updatedBrand: BrandModel): void {
    const index = this.brands.findIndex(brand => brand.id === updatedBrand.id);
    if (index !== -1) {
      this.brands[index] = updatedBrand;
    }
  }

  deleteBrand(id: number): void {
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

}

