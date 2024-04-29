import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { faSearch, faUser, faShoppingBasket, faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoryStoreItem } from '../services/category/category.storeItem';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CartStoreItem } from '../services/cart/cart.storeItem';
import { UserService } from '../services/users/user.service';
import { SearchKeyword } from '../types/kws.type';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {

  faSearch = faSearch;
  faUser = faUser;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;
  subscriptions: Subscription = new Subscription();
  // faHeart = faHeart;

  displaySearch: boolean = true;
  isUserAuthenticated: boolean = false;
  userName: string = '';

  constructor(public categoryStory: CategoryStoreItem, private router: Router, public cartStore: CartStoreItem, public userService: UserService) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd
      )).subscribe(event => {
        this.displaySearch = (event as NavigationEnd).url === '/home/products' ? true : false
      })

    this.subscriptions.add(
      this.userService.isUserAuthenticated$.subscribe((result) => {
        this.isUserAuthenticated = result;
      }));

    this.subscriptions.add(
      this.userService.loggedInUser$.subscribe((result) => {
        this.userName = result.firstName;
      })
    );


  }

  @Output()
  searchClicked: EventEmitter<SearchKeyword> =
    new EventEmitter<SearchKeyword>();



  onClickSearch(keyword: string, categoryId: string): void {
    this.searchClicked.emit({
      categoryId: parseInt(categoryId),
      keyword: keyword,
    });
  }

  navigateTocart(): void {
    this.router.navigate(['home/cart']);
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['home/products']);
  }

  pastOrders(): void {
    this.router.navigate(['home/pastorders']);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
