import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { URLS } from '../../data/constant';
import { AuthenticationService } from '../../service/auth/authentication.service';

@Injectable( {
  providedIn: 'root'
} )
export class AuthGuard implements CanActivate {

  URLS = URLS;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.authenticationService.currentUserValue;
    if ( currentUser ) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate( [ URLS.login ], { queryParams: { returnUrl: state.url } } ).then( () => {
      return false;
    } );
  }
}
