import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from '../models/person';
import { ProfessorsService } from './professors.service';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: 'professors-app',
    templateUrl: './professors.component.html',
    styleUrls: ['./professors.component.scss'],
    providers: [
        ProfessorsService
    ]
})

export class ProfessorsComponent {
    public dataSource;
    public displayedColumns: string[] = ['first_name', 'last_name', 'phone', 'email'];
    private subscription: Subscription = new Subscription();

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('input') input: ElementRef;

    public constructor(private professorsService: ProfessorsService) {
        this.loadProfessors();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public loadProfessors(): void {
        this.subscription.add(
            this.professorsService.getActiveProfessors()
                .subscribe(
                    (data: Person[]) => {
                        this.dataSource = new MatTableDataSource(data),
                        this.dataSource.sort = this.sort
                    }
                )
        );
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
