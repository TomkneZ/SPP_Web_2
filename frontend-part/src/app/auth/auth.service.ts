import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthService {    
    private loginUserUrl = 'users/loginuser';

    private addUserUrl = 'users/adduser';

    public constructor(private http: HttpClient, private cookieService: CookieService) {
       
    }

    public get currentUserToken(): Boolean {
        if (this.cookieService.get('token')) {
            return true;
        }
        else {
            return false;
        }
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
        this.cookieService.deleteAll();
    }    
}
