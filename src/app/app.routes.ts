import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CategoryList } from './categories/category-list/category-list';
import { BrandList } from './brands/brand-list/brand-list';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'categories', component: CategoryList },
  { path: 'brands', component: BrandList },
];
