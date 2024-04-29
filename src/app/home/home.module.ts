import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './services/category/category.service';
import { CategoryStoreItem } from './services/category/category.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { ProductsService } from './services/product/products.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { CartStoreItem } from './services/cart/cart.storeItem';
import { CartComponent } from './cart/cart.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserService } from './services/users/user.service';
import { OrderService } from './services/order/order.service';
import { PastordersComponent } from './pastorders/pastorders.component';
import { FooterComponent } from './footer/footer.component';
//import { ProductsComponent } from './components/products/products.component';
//import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent,
    ProductdetailsComponent,
    ProductGalleryComponent,
    CartComponent,
    UserSignupComponent,
    UserLoginComponent,
    PastordersComponent,
    FooterComponent,


  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [
    CategoryService, CategoryStoreItem, ProductsStoreItem, ProductsService, CartStoreItem, UserService, OrderService
  ]
})
export class HomeModule { }
