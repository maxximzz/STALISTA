import { Component } from '@angular/core';
import { CategoryStoreItem } from './services/category/category.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SearchKeyword } from './types/kws.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private categoryStoreItem: CategoryStoreItem,
    private productsStoreItem: ProductsStoreItem, private router: Router) {
    this.categoryStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();

    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd).url === '/home') {
          router.navigate(['/home/products']);
        }
      });
  }



  onSelectCategory(categoryId: number): void {
    this.productsStoreItem.loadProducts('maincategoryid=' + categoryId);
  }

  onSearchKeyword(searchKeyword: SearchKeyword): void {
    this.productsStoreItem.loadProducts(
      'maincategoryid=' +
      searchKeyword.categoryId +
      '&keyword=' +
      searchKeyword.keyword
    );
  }


} 