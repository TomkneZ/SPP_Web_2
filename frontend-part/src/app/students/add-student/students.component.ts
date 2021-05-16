import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { StudentsService } from '../students.service'
import { Person } from '../../models/person';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'courses-app',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    providers: [
        StudentsService
    ]
})

export class AddStudentComponent implements OnInit {
    public addStudentForm: FormGroup;
    public submitted = false;
    public studentAdded: Boolean = false;

    public activations: boolean[] = [true, false];
    public selectedActivation: boolean;

    public constructor(
        private studentsService: StudentsService,
        private authService: AuthService,
        private formBuilder: FormBuilder) { }

    public ngOnInit(): void {
        this.addStudentForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', Validators.required],
            activation: ['', Validators.required]
        });
    }

    get f() { return this.addStudentForm.controls; }

    public onLogout(): void {
        this.authService.logout();
    }

    public onSubmit(): void {
        this.submitted = true;

        if (this.addStudentForm.invalid) {
            return;
        }

        this.studentAdded = true;

        this.studentsService.addStudent(this.f.firstname.value, this.f.lastname.value, this.f.email.value, this.selectedActivation)
            .subscribe(
                (error) => {
                    console.log(error);
                }
            );
    }
}