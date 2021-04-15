import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// Components.
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfessorsComponent } from './professors/professors.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'professors', component: ProfessorsComponent },
    { path: 'courses', component: CoursesComponent }    
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }