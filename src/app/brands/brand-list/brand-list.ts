import { Component } from '@angular/core';
import { BrandModel } from '../brand-model';
import { BrandService } from '../brand-service';
import { RouterLink } from '@angular/router';
import { ModelFilter } from "../../shared/model-filter/model-filter";
import { Pagination } from '../../shared/pagination/pagination';

@Component({
  selector: 'app-brand-list',
  imports: [RouterLink, ModelFilter, Pagination],
  templateUrl: './brand-list.html',
  styleUrl: './brand-list.css',
})
export class BrandList /*implements OnInit*/ {

  allBrands: BrandModel[];
  brands!: BrandModel[];

  currentPage = 1;
  pageSize = 5;

  constructor(private brandService: BrandService) {
    this.allBrands = brandService.getBrands();

    this.pagination();
  }

  pagination()
  {
    const startIndex = (this.currentPage - 1) * this.pageSize; // 10
    const endIndex = startIndex + this.pageSize; // 15
    this.brands = this.allBrands.slice(startIndex, endIndex);
  }

  onPageChanged(page: number){
    this.currentPage = page;
    this.pagination();
  }

  // ngOnInit(): void {
  //   this.brands = this.brandService.getBrands();
  // }

  deleteBrand(id: number): void {
    this.brandService.deleteBrand(id);
    this.allBrands = this.brandService.getBrands();

    this.currentPage = 1;
    this.pagination();
  }
  
  onFilter(value: string) {
    if(value === '')
      this.allBrands = this.brandService.getBrands();

    this.allBrands = this.allBrands.filter(b=>b.name.toLowerCase().includes(value.trim().toLowerCase()));

    this.currentPage = 1;
    this.pagination();
  }
}
