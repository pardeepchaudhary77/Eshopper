import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { AddBrandsComponent } from './pages/account/add-brands/add-brands.component';
import { AddCategoryComponent } from './pages/account/add-category/add-category.component';
import { AddProductComponent } from './pages/account/add-product/add-product.component';
import { UploadImagesComponent } from './pages/account/upload-images/upload-images.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'/'},
  {path:'', component: HomeComponent},
  {path:'loginSignup', component: LoginSignupComponent},
  {path:'account', children: [
    { path: '', redirectTo: 'addProduct', pathMatch: 'full'},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'addCategory', component: AddCategoryComponent},
    {path: 'addBrands', component: AddBrandsComponent},
    {path: 'uploadImages', component: UploadImagesComponent}
  ]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
