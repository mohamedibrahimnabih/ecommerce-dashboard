import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrandModel } from '../brand-model';
import { BrandService } from '../brand-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brand-update',
  imports: [FormsModule],
  templateUrl: './brand-update.html',
  styleUrl: './brand-update.css',
})
export class BrandUpdate implements OnInit {
  brand: BrandModel = { id: 0, name: '', status: false, logo: '' };
  selectedFile: File | null = null;

  constructor(private brandService: BrandService, 
    private activatedRoute: ActivatedRoute, private router: Router,
    private cdr : ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const brandId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.brandService.getBrandById(brandId)
    .subscribe({
      next: (result) => {
        this.brand = result.brand;
        this.brand.logo = `https://localhost:7270/images/brand_logos/${this.brand.logo}`;
        this.cdr.detectChanges();
      },
      error: (err) =>{
        alert('Error')
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  update() {
    const formData = new FormData();

    formData.append('Name', this.brand.name);
    formData.append('Status', this.brand.status.toString());

    if(this.selectedFile)
    {
      formData.append('Logo', this.selectedFile, this.selectedFile?.name);
    }

    this.brandService.updateBrand(this.brand.id, formData)
    .subscribe({
      next: () => {
        this.router.navigate(['/brands']);
      },
      error: (err) => {
        alert('Error');
      }
    });

    this.router.navigate(['/brands']);
  }
}
