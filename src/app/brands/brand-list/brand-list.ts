import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class BrandList implements OnInit {

    brands!: BrandModel[];
  
    currentPage = 1;
    totalPages = 0;
    filterValue = '';
  
    constructor(private brandService: BrandService, private cdr : ChangeDetectorRef) {
    }
  
    ngOnInit(): void {
      this.loadData();
    }
  
    loadData() {
      this.brandService.getBrands(this.filterValue, this.currentPage)
      .subscribe(result => {
        this.brands = result.brands;
        this.totalPages = result.totalPages;
        this.currentPage = result.currentPage;
        this.cdr.detectChanges();
      });
    }
  
    changePage(page: number){
      if(page < 1 || page > this.totalPages) return;
  
      this.currentPage = page;
      this.loadData();
    }
  
    deleteBrand(id: number): void {
      this.brandService.deleteBrand(id).subscribe(() => {
        this.currentPage = 1;
        this.loadData();
      })
    }
  
    onFilter(value: string) {
      this.filterValue = value;
  
      this.currentPage = 1;
      this.loadData();
    }
}
