import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { ProfessorsService } from '../professors.service'
import { Person } from '../../models/person';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'courses-app',
    templateUrl: './professors.component.html',
    styleUrls: ['./professors.component.scss'],
    providers: [
        ProfessorsService
    ]
})

export class AddProfessorComponent implements OnInit {
    public addProfessorForm: FormGroup;
    public submitted = false;
    public professorAdded: Boolean = false;

    public activations: boolean[] = [true, false];
    public selectedActivation: boolean;

    public constructor(
        private professorsService: ProfessorsService,
        private authService: AuthService,
        private formBuilder: FormBuilder) { }

    public ngOnInit(): void {
        this.addProfessorForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', Validators.required],
            activation: ['', Validators.required]
        });
    }

    get f() { return this.addProfessorForm.controls; }

    public onLogout(): void {
        this.authService.logout();
    }

    public onSubmit(): void {
        this.submitted = true;

        if (this.addProfessorForm.invalid) {
            return;
        }

        this.professorAdded = true;        

        this.professorsService.addProfessor(this.f.firstname.value, this.f.lastname.value, this.f.email.value, this.selectedActivation)
            .subscribe(
                (error) => {
                    console.log(error);
                }
            );
    }
}