// import { Component } from '@angular/core';
// import { BrandModel } from '../brand-model';
// import { FormsModule } from '@angular/forms';
// import { BrandService } from '../brand-service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-brand-create',
//   imports: [FormsModule],
//   templateUrl: './brand-create.html',
//   styleUrl: './brand-create.css',
// })
// export class BrandCreate {
//   brand: BrandModel = { id: 0, name: '', logoUrl: '', description: '', isActive: true };
//   selectedFile!: File;

//   constructor(private brandService: BrandService, private router: Router) { }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   save() {
//     this.brand.id = Math.floor(Math.random() * 10000);
//     this.brandService.addBrand(this.brand);

//     this.router.navigate(['/brands']);
//   }
// }
