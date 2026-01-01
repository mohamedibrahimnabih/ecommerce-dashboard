import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CategoryList } from './categories/category-list/category-list';
import { BrandList } from './brands/brand-list/brand-list';
import { ProductList } from './products/product-list/product-list';
import { CategoryCreate } from './categories/category-create/category-create';
import { CategoryUpdate } from './categories/category-update/category-update';
import { BrandCreate } from './brands/brand-create/brand-create';
import { BrandUpdate } from './brands/brand-update/brand-update';
import { ProductCreate } from './products/product-create/product-create';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'categories', component: CategoryList },
  { path: 'categories/create', component: CategoryCreate },
  { path: 'categories/update/:id', component: CategoryUpdate },
  { path: 'brands', component: BrandList },
  { path: 'brands/create', component: BrandCreate },
  { path: 'brands/update/:id', component: BrandUpdate },
  { path: 'products', component: ProductList },
  { path: 'products/create', component: ProductCreate },
  // { path: 'products/update/:id', component: ProductUpdate },
  { path: '**', redirectTo: '' }
];
