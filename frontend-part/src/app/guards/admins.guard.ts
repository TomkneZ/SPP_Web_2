import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminsGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
        private cookieService: CookieService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentRole = this.cookieService.get('role');
        if (currentRole == 'admin') {
            return true;
        }

        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
    }
}