import { Component } from '@angular/core';
import { BrandModel } from '../brand-model';
import { BrandService } from '../brand-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  imports: [RouterLink],
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
}
