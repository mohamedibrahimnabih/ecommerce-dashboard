import { Injectable } from '@angular/core';
import { BrandModel } from './brand-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class BrandService /*implements OnInit*/ {
  
  baseUrl = 'https://localhost:7270/Admin/Brands';

  constructor(private httpClient: HttpClient) {
  }

  // ngOnInit(): void {
  //   this.categories = [
  //     { id: 1, name: 'Electronics', description: 'Gadgets and devices', isActive: true },
  //     { id: 2, name: 'Books', description: 'Printed and digital books', isActive: true },
  //     { id: 3, name: 'Clothing', description: 'Apparel and accessories', isActive: false },
  //   ];
  // }

  getBrands(filter?: string, page: number = 1): Observable<any> {

    let params = new HttpParams().set('page', page);

    if(filter)
      params = params.set('brandName', filter);

    return this.httpClient.get<any>(this.baseUrl, { params });
  }

  getBrandById(id: number): Observable<BrandModel> {
    return this.httpClient.get<BrandModel>(`${this.baseUrl}/${id}`);
  }

  addBrand(brand: BrandModel): Observable<any> {
    return this.httpClient.post(this.baseUrl, {
      name: brand.name,
      status: brand.status,
      logo: brand.logo
    });
  }

  updateBrand(id: number, updatedBrand: BrandModel): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, {
      name: updatedBrand.name,
      status: updatedBrand.status,
      logo: updatedBrand.logo
    });
  }

  deleteBrand(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}

