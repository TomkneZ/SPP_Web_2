import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { ProfessorsService } from './professors.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'professors-app',
    templateUrl: './professors.component.html',
    styleUrls: ['./professors.component.scss'],
    providers: [
        ProfessorsService
    ]
})

export class ProfessorsComponent {
    public professors: Person[];
    public displayedColumns: string[] = ['first_name', 'last_name', 'phone', 'email'];
    private subscription: Subscription = new Subscription();

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
                    (data: Person[]) => this.professors = data
                )
        );
    }
}
