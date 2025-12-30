import { Component } from '@angular/core';
import { BrandModel } from '../brand-model';
import { BrandService } from '../brand-service';
import { RouterLink } from '@angular/router';
import { ModelFilter } from "../../shared/model-filter/model-filter";

@Component({
  selector: 'app-brand-list',
  imports: [RouterLink, ModelFilter],
  templateUrl: './brand-list.html',
  styleUrl: './brand-list.css',
})
export class BrandList /*implements OnInit*/ {

  brands: BrandModel[];

  constructor(private brandService: BrandService) {
    this.brands = brandService.getBrands();
  }

  // ngOnInit(): void {
  //   this.brands = this.brandService.getBrands();
  // }

  deleteBrand(id: number): void {
    this.brandService.deleteBrand(id);
    this.brands = this.brandService.getBrands();
  }
  
  onFilter(value: string) {
    if(value === '')
      this.brands = this.brandService.getBrands();

    this.brands = this.brands.filter(b=>b.name.toLowerCase().includes(value.trim().toLowerCase()));
  }
}
