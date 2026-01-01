import { Injectable } from '@angular/core';
import { BrandModel } from './brand-model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class BrandService /*implements OnInit*/ {
  
  baseUrl = 'https://localhost:7270/Admin/Brands';

  private getHeaders() : HttpHeaders {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImNhY2Y4ODE0LWFiYmUtNGRmMS04MTAxLTY4YzhkMzcxZTczMyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Ik1vaGFtZWROYWJpaEFQSUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTW9oYW1lZE5hYmloQVBJIiwianRpIjoiMS8xLzIwMjYgNzo1Njo1NiBBTSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJDdXN0b21lciIsIlN1cGVyQWRtaW4iXSwiZXhwIjoxNzY4NDUzMDE2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MjcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCxodHRwczovL2xvY2FsaG9zdDo1MDAwIn0.R51jqEZQUB2-x72DM_iEf2cx_f_s8r-Qe5NYMt_6gHI";

    return new HttpHeaders({
      'authorization': `bearer ${token}`
    });
  }

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

    return this.httpClient.get<any>(this.baseUrl, 
      { 
        params,
        headers: this.getHeaders()
      });
  }

  getBrandById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  addBrand(formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseUrl, formData, 
    {
      headers: this.getHeaders()
    });
  }

  updateBrand(id: number, formData: FormData): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, formData, 
    {
      headers: this.getHeaders()
    });
  }

  deleteBrand(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

}

