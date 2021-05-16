import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable, Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {    
    private loginUserUrl = 'users/loginuser';
    private logoutUserUrl = 'users/me/logout';
    private addUserUrl = 'users/adduser';
    private subscription: Subscription = new Subscription();

    public constructor(
        private http: HttpClient,
        private cookieService: CookieService,
        private router: Router) { }

    public get currentUserToken(): Boolean {
        if (this.cookieService.get('token')) {
            return true;
        }
        else {
            return false;
        }
    }

    public get currentUserRole(): string {
        return this.cookieService.get('role');        
    }

    public login(email: string, password: string): Observable<Object> {
        const body = { email: email, password: password };
        return this.http.post(`${environment.host}${this.loginUserUrl}`, body, { withCredentials: true });         
    }

    public register(login: string, email: string, password: string): Observable<Object> {
        const defaultRole = 'student';
        const body = { login: login, email: email, password: password, role: defaultRole };
        return this.http.post(`${environment.host}${this.addUserUrl}`, body, { withCredentials: true });    
    }

    public logout(): void {    
        this.http.post(`${environment.host}${this.logoutUserUrl}`, null, { withCredentials: true })
            .subscribe(
                () => {
                    this.cookieService.deleteAll();
                    this.router.navigate(['']);
                },
                (error) => {
                    console.log(error);
                }
        );       
    }    
}
