import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';

// Components.
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminCoursesComponent } from './courses/admin-courses/courses.component';
import { AddCourseComponent } from './courses/add-course/courses.component';
import { ProfessorsComponent } from './professors/professors.component';
import { AdminProfessorsComponent } from './professors/admin-professors/professors.component';
import { StudentsComponent } from './students/students.component';
import { AdminStudentsComponent } from './students/admin-students/students.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddProfessorComponent } from './professors/add-professor/professors.component';
import { AddStudentComponent } from './students/add-student/students.component';

// Angular Material.
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { AuthGuard } from './guards/auth.guard';
import { ProfessorsGuard } from './guards/professors.guard';
import { AdminsGuard } from './guards/admins.guard';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
    { path: 'adminstudents', component: AdminStudentsComponent, canActivate: [AuthGuard, AdminsGuard] },
    { path: 'professors', component: ProfessorsComponent, canActivate: [AuthGuard] },
    { path: 'adminprofessors', component: AdminProfessorsComponent, canActivate: [AuthGuard, AdminsGuard] },
    { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
    { path: 'admincourses', component: AdminCoursesComponent, canActivate: [AuthGuard, AdminsGuard] },
    { path: 'addcourse', component: AddCourseComponent, canActivate: [AuthGuard, ProfessorsGuard] },
    { path: 'addprofessor', component: AddProfessorComponent, canActivate: [AuthGuard, AdminsGuard] },
    { path: 'addstudent', component: AddStudentComponent, canActivate: [AuthGuard, AdminsGuard] }
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        MatInputModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule,
        MatInputModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatTableModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatRadioModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        CoursesComponent,
        AddCourseComponent,
        StudentsComponent,
        ProfessorsComponent,
        RegisterComponent,
        AdminStudentsComponent,
        AdminCoursesComponent,
        AdminProfessorsComponent,
        AddStudentComponent,
        AddProfessorComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }