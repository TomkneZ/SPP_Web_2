import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Components.
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfessorsComponent } from './professors/professors.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';

// Angular Material.
import { MatTableModule } from '@angular/material/table';

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
        MatTableModule,
        HttpClientModule
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