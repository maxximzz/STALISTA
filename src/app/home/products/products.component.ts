import { Component } from '@angular/core';
import { ProductsService } from '../services/product/products.service';
import { Product } from '../types/product.type';
import { ProductsStoreItem } from '../services/product/products.storeItem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartStoreItem } from '../services/cart/cart.storeItem';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent {
  products: Product[] = [];
  faShoppingCart = faShoppingCart;

  constructor(public productsStore: ProductsStoreItem, private cart: CartStoreItem) {

  }

  addToCart(product: Product) {
    this.cart.addProduct(product);
  }
}
