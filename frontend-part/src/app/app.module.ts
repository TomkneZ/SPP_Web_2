import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components.
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfessorsComponent } from './professors/professors.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';

// Angular Material.
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'professors', component: ProfessorsComponent },
    { path: 'courses', component: CoursesComponent }
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
        MatButtonModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        CoursesComponent,
        StudentsComponent,
        ProfessorsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }