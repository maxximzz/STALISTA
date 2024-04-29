import { Component, EventEmitter, Output, } from '@angular/core';
import { Category } from '../types/category.type';
//import { CategoryService } from '../services/category/category.service';
import { CategoryStoreItem } from '../services/category/category.storeItem';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.css']
})
export class SidenavigationComponent implements OnDestroy {

  @Output()
  subCategoryClicked: EventEmitter<number> = new EventEmitter<number>();

  categories: Category[] = [];
  subscription: Subscription = new Subscription();

  constructor(categoryStore: CategoryStoreItem) {
    this.subscription.add(categoryStore.categories$.subscribe(categories => {
      this.categories = categories;
    }));
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }
  onSubCategoryClick(subCategory: Category): void {
    this.subCategoryClicked.emit(subCategory.id);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}