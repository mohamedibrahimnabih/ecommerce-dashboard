import { Component } from '@angular/core';
import { BrandModel } from '../brand-model';
import { FormsModule } from '@angular/forms';
import { BrandService } from '../brand-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-create',
  imports: [FormsModule],
  templateUrl: './brand-create.html',
  styleUrl: './brand-create.css',
})
export class BrandCreate {

  brandName: string = '';
  brandStatus : boolean = true;
  selectedFile: File | null = null;

  constructor(private brandService: BrandService, private router: Router) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  save() {

    const formData = new FormData();

    formData.append('Name', this.brandName);
    formData.append('Status', this.brandStatus.toString());

    if(this.selectedFile)
    {
      formData.append('Logo', this.selectedFile, this.selectedFile?.name);
    }

    this.brandService.addBrand(formData)
    .subscribe({
      next: () => {
        this.router.navigate(['/brands']);
      },
      error: (err) => {
        alert('Error');
      }
    });

  }
}
