import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  baseUrl = 'https://localhost:7270/Admin/Products';

  private getHeaders() : HttpHeaders {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImNhY2Y4ODE0LWFiYmUtNGRmMS04MTAxLTY4YzhkMzcxZTczMyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Ik1vaGFtZWROYWJpaEFQSUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTW9oYW1lZE5hYmloQVBJIiwianRpIjoiMS8xLzIwMjYgNzo1Njo1NiBBTSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJDdXN0b21lciIsIlN1cGVyQWRtaW4iXSwiZXhwIjoxNzY4NDUzMDE2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MjcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMCxodHRwczovL2xvY2FsaG9zdDo1MDAwIn0.R51jqEZQUB2-x72DM_iEf2cx_f_s8r-Qe5NYMt_6gHI";

    return new HttpHeaders({
      'authorization': `bearer ${token}`
    });
  }

  constructor(private httpClient: HttpClient) 
  {
    // // Sample product data
    // this.products = [
    //   {
    //     id: 1,
    //     name: 'Sample Product 1',
    //     description: 'This is a sample product description.',
    //     price: 29.99,
    //     quantity: 100,
    //     discount: 10,
    //     imageUrl: 'https://example.com/image1.jpg',
    //     SubImages: ['https://example.com/image1a.jpg', 'https://example.com/image1b.jpg'],
    //     Colors: ['Red', 'Blue', 'Green'],
    //     categoryId: 1,
    //     brandId: 1,
    //     status: true,
    //   },
    //   {
    //     id: 2,
    //     name: 'Sample Product 2',
    //     description: 'This is another sample product description.',
    //     price: 49.99,
    //     quantity: 50,
    //     discount: 15,
    //     imageUrl: 'https://example.com/image2.jpg',
    //     SubImages: ['https://example.com/image2a.jpg', 'https://example.com/image2b.jpg'],
    //     Colors: ['Black', 'White'],
    //     categoryId: 2,
    //     brandId: 2,
    //     status: true,
    //   },
    //   {
    //     id: 3,
    //     name: 'Sample Product 3',
    //     description: 'This is yet another sample product description.',
    //     price: 19.99,
    //     quantity: 200,
    //     discount: 5,
    //     imageUrl: 'https://example.com/image3.jpg',
    //     SubImages: ['https://example.com/image3a.jpg', 'https://example.com/image3b.jpg'],
    //     Colors: ['Yellow', 'Purple'],
    //     categoryId: 1,
    //     brandId: 3,
    //     status: false,
    //   }
    // ];
  }

  getProducts(filter?: string, page: number = 1): Observable<any> {

    let params = new HttpParams().set('page', page);

    if(filter)
      params = params.set('productName', filter);

    return this.httpClient.get<any>(this.baseUrl, 
      { 
        params,
        headers: this.getHeaders()
      });
  }

  getProductById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`, 
      {
        headers: this.getHeaders()
      });
  }

  addProduct(formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseUrl, formData, {
      headers: this.getHeaders()
    })
  }

  updateProduct(id: number, formData: FormData): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, formData, {
      headers: this.getHeaders()
    })
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`, 
      {
        headers: this.getHeaders()
      });
  }
}