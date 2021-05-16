import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({ providedIn: 'root' })
export class ProfessorsService {

    private getActiveProfessorsUrl = 'professors/getactiveprofessors';
    private addProfessorUrl = 'professors/addprofessor';

    public constructor(private http: HttpClient) { }

    public getActiveProfessors(): Observable<Person[]> {
        return this.http.get<Person[]>(`${environment.host}${this.getActiveProfessorsUrl}`);
    }  

    public addProfessor(first_name: string, last_name: number, email: string, is_account_active: boolean): Observable<Object> {
        const body = { first_name: first_name, last_name: last_name, email: email, is_account_active: is_account_active};
        return this.http.post(`${environment.host}${this.addProfessorUrl}`, body);
    }
}
