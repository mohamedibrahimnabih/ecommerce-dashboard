import { Injectable, OnInit } from '@angular/core';
import { CategoryModel } from './category-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService /*implements OnInit*/ {
  
  baseUrl = 'https://localhost:7270/Admin/Categories';

  constructor(private httpClient: HttpClient) {
  }

  // ngOnInit(): void {
  //   this.categories = [
  //     { id: 1, name: 'Electronics', description: 'Gadgets and devices', isActive: true },
  //     { id: 2, name: 'Books', description: 'Printed and digital books', isActive: true },
  //     { id: 3, name: 'Clothing', description: 'Apparel and accessories', isActive: false },
  //   ];
  // }

  getCategories(filter?: string, page: number = 1): Observable<any> {

    let params = new HttpParams().set('page', page);

    if(filter)
      params = params.set('categoryName', filter);

    return this.httpClient.get<any>(this.baseUrl, { params });
  }

  getCategoryById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`);
  }

  addCategory(category: CategoryModel): Observable<any> {
    return this.httpClient.post(this.baseUrl, {
      name: category.name,
      status: category.status
    });
  }

  updateCategory(id: number, updatedCategory: CategoryModel): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, {
      name: updatedCategory.name,
      status: updatedCategory.status
    });
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
