import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CategoryList } from './categories/category-list/category-list';
import { BrandList } from './brands/brand-list/brand-list';
import { CategoryCreate } from './categories/category-create/category-create';
import { BrandCreate } from './brands/brand-create/brand-create';
import { BrandUpdate } from './brands/brand-update/brand-update';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'categories', component: CategoryList },
  { path: 'categories/create', component: CategoryCreate },
  { path: 'brands', component: BrandList },
  { path: 'brands/create', component: BrandCreate },
  { path: 'brands/update/:id', component: BrandUpdate },
];
