import { Component } from '@angular/core';
import { ProductsStoreItem } from '../services/product/products.storeItem';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css'
})
export class ProductGalleryComponent {

  constructor(private productsStoreItem: ProductsStoreItem) {

  }

  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts('subcategoryid=' + subCategoryId);
  }

}
