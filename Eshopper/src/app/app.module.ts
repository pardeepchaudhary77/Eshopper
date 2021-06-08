import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
