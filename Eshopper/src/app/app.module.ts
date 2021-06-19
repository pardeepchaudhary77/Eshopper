import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './pages/account/account.component';
import { AddProductComponent } from './pages/account/add-product/add-product.component';
import { AddCategoryComponent } from './pages/account/add-category/add-category.component';
import { AddBrandsComponent } from './pages/account/add-brands/add-brands.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploadImagesComponent } from './pages/account/upload-images/upload-images.component';
import { ProductComponent } from './pages/product/product.component';
import { SortbyBrandComponent } from './pages/sortby-brand/sortby-brand.component';
import { SliderComponent } from './pages/account/slider/slider.component';
import { SortByCategoryComponent } from './pages/sort-by-category/sort-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginSignupComponent,
    AccountComponent,
    AddProductComponent,
    AddCategoryComponent,
    AddBrandsComponent,
    DropzoneDirective,
    UploadImagesComponent,
    ProductComponent,
    SortbyBrandComponent,
    SliderComponent,
    SortByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
          apiKey: "AIzaSyAvXHg3FpdL5FFSN95GUHe13reVX1E_qTU",
          authDomain: "eshopper-33467.firebaseapp.com",
          projectId: "eshopper-33467",
          storageBucket: "eshopper-33467.appspot.com",
          messagingSenderId: "539752103983",
          appId: "1:539752103983:web:73d797a4c0b8963d6c86da",
          measurementId: "G-FPFMZG6D3P"
        }
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
