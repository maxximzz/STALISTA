import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot, } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from './users/user.service';

export const authentification = (next: ActivatedRouteSnapshot) => {
    return inject(UserService)
        .isUserAuthenticated$
        .pipe(
            map((isAuthenticated) =>
                isAuthenticated ? true : createUrlTreeFromSnapshot(next, ['/', 'home', 'login'])
            )
        );
};