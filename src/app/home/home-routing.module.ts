import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { ProductGalleryComponent } from "./product-gallery/product-gallery.component";
import { CartComponent } from "./cart/cart.component";
import { UserSignupComponent } from "./users/user-signup/user-signup.component";
import { UserLoginComponent } from "./users/user-login/user-login.component";
import { PastordersComponent } from "./pastorders/pastorders.component";
import { authentification } from "./services/authentification";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'home',
                component: ProductGalleryComponent

            },
            {
                path: 'products',
                component: ProductGalleryComponent

            },
            {
                path: 'product/:id',
                component: ProductdetailsComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'signup',
                component: UserSignupComponent
            },
            {
                path: 'login',
                component: UserLoginComponent
            },
            {
                path: 'pastorders',
                component: PastordersComponent,
                canActivate: [authentification]
            }

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule { }