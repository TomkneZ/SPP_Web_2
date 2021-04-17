﻿import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { CoursesService } from './courses.service'
import { Course } from '../models/course';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'courses-app',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    providers: [
        CoursesService
    ]
})

export class CoursesComponent {
    public availableCoursesDataSource;
    public addedCoursesDataSource;
    public displayedColumns: string[] = ['name', 'unique_code'];
    private subscription: Subscription = new Subscription();
    private studentId = '607742916308a64f7447bf8b';
    public displayAvailable: Boolean = true;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;

    public constructor(private coursesService: CoursesService) {
        this.loadAvailableCourses();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public loadAvailableCourses(): void {
        this.subscription.add(
            this.coursesService.getAvailableCourses(this.studentId)
                .subscribe(
                    (data: Course[]) => {
                        this.availableCoursesDataSource = new MatTableDataSource(data),
                            this.availableCoursesDataSource.sort = this.sort
                    }
            )
        );
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.availableCoursesDataSource.filter = filterValue.trim().toLowerCase();
    }

    public loadAddedCourses(): void {
        this.subscription.add(
            this.coursesService.getAddedCourses(this.studentId)
                .subscribe(
                    (data: Course[]) => {
                        this.addedCoursesDataSource = new MatTableDataSource(data),
                            this.addedCoursesDataSource.sort = this.sort
                    }
                )
        );
    }

    onRowClicked(row) {
        const courseId = row._id;
        this.subscription.add(
            this.coursesService.addStudentToCourse(this.studentId, courseId)
                .subscribe(
                    (data: Boolean) => {
                        this.displayAvailable = !data,
                            this.loadAddedCourses()
                    }
                )
        );   
        
    }
}