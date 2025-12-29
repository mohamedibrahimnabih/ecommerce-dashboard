import { Component } from '@angular/core';
import { BrandModel } from '../brand-model';
import { BrandService } from '../brand-service';

@Component({
  selector: 'app-brand-list',
  imports: [],
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
}
