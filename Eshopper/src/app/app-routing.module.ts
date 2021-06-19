import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { AddBrandsComponent } from './pages/account/add-brands/add-brands.component';
import { AddCategoryComponent } from './pages/account/add-category/add-category.component';
import { AddProductComponent } from './pages/account/add-product/add-product.component';
import { SliderComponent } from './pages/account/slider/slider.component';
import { UploadImagesComponent } from './pages/account/upload-images/upload-images.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { SortByCategoryComponent } from './pages/sort-by-category/sort-by-category.component';
import { SortbyBrandComponent } from './pages/sortby-brand/sortby-brand.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'/'},
  {path:'', component: HomeComponent},
  {path:'loginSignup', component: LoginSignupComponent},
  {path:'product/:id', component: ProductComponent},
  {path:'brand-wise-product/:id', component: SortbyBrandComponent},
  {path:'category-wise-product/:id', component: SortByCategoryComponent},
  {path:'account', children: [
    { path: '', redirectTo: 'addProduct', pathMatch: 'full'},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'addCategory', component: AddCategoryComponent},
    {path: 'addBrands', component: AddBrandsComponent},
    {path: 'uploadImages', component: UploadImagesComponent},
    {path: 'slider', component: SliderComponent}
  ]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
