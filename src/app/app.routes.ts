import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CategoryList } from './categories/category-list/category-list';
import { BrandList } from './brands/brand-list/brand-list';
import { BrandCreate } from './brands/brand-create/brand-create';
import { BrandUpdate } from './brands/brand-update/brand-update';
import { ProductList } from './products/product-list/product-list';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'categories', component: CategoryList },
  // { path: 'categories/create', component: CategoryCreate },
  // { path: 'categories/update/:id', component: CategoryUpdate },
  { path: 'brands', component: BrandList },
  { path: 'brands/create', component: BrandCreate },
  { path: 'brands/update/:id', component: BrandUpdate },
  { path: 'products', component: ProductList },
  // { path: 'products/create', component: ProductCreate },
  // { path: 'products/update/:id', component: ProductUpdate },
  // { path: '**', redirectTo: '' }
];
