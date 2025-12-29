import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrandModel } from '../brand-model';
import { BrandService } from '../brand-service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-brand-update',
  imports: [FormsModule, NgIf],
  templateUrl: './brand-update.html',
  styleUrl: './brand-update.css',
})
export class BrandUpdate implements OnInit {
  brand!: BrandModel;
  selectedFile!: File;

  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const brandId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const result = this.brandService.getBrandById(brandId);

    if(result){
      this.brand = { ...result };
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  update() {
    this.brandService.updateBrand(this.brand);

    this.router.navigate(['/brands']);
  }
}
