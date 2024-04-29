import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { HomeModule } from './home/home.module';
//import { HeaderComponent } from './home/components/header/header.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatnavigationComponent } from './home/catnavigation/catnavigation.component';
//import { HomecartComponent } from './homecart/homecart.component';
//import { ProductGalleryComponent } from './home/product-gallery/product-gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    // HomecartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule



  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
