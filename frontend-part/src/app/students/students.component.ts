import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Person } from '../models/person';
import { StudentsService } from './students.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'students-app',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    providers: [
        StudentsService
    ]
})

export class StudentsComponent {
    public dataSource;
    public displayedColumns: string[] = ['first_name', 'last_name', 'phone', 'email'];
    private subscription: Subscription = new Subscription();

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;

    public constructor(
        private studentsService: StudentsService,
        private authService: AuthService) {
        this.loadStudents();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public loadStudents(): void {
        this.subscription.add(
            this.studentsService.getActiveStudents()
                .subscribe(
                    (data: Person[]) => {
                        this.dataSource = new MatTableDataSource(data),
                        this.dataSource.sort = this.sort
                    }
            )
        );
    }

    public applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    public onLogout(): void {
        this.authService.logout();
    }
}
