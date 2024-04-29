import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../types/category.type';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CategoryStoreItem } from '../services/category/category.storeItem';


@Component({
  selector: 'app-catnavigation',
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.css'
})
export class CatnavigationComponent {
  @Output()
  categoryClicked: EventEmitter<number> = new EventEmitter<number>();

  displayOptions: boolean = true;

  constructor(public categoryStore: CategoryStoreItem, private router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd
      )).subscribe(event => {
        this.displayOptions = (event as NavigationEnd).url === '/home/products' ? true : false
      })
  }

  onCategoryClick(category: Category): void {
    this.categoryClicked.emit(category.id);
  }
}
