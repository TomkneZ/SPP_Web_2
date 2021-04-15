import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { StudentsService } from './students.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'students-app',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    providers: [
        StudentsService
    ]
})

export class StudentsComponent {   
    public students: Person[];
    public displayedColumns: string[] = ['first_name', 'last_name', 'phone', 'email'];
    private subscription: Subscription = new Subscription();

    public constructor(private studentsService: StudentsService) {
        this.loadStudents();
    } 

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public loadStudents(): void {
        this.subscription.add(
            this.studentsService.getActiveStudents()
                .subscribe(
                    (data: Person[]) => this.students = data
                )
        );
    }
}
