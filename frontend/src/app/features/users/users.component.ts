import { AsyncPipe, NgFor } from "@angular/common";
import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { User } from "../../core/interfaces/user.interface";
import { UsersService } from "../../core/services/users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    standalone: true,
    imports: [NgFor, AsyncPipe, RouterLink]
})
export class UsersComponent implements OnInit, OnDestroy {
    private userService = inject(UsersService)
    users: Observable<User[]> = this.userService.usersFiltered$
    subscription!: Subscription

    ngOnInit(): void {
       // this.subscription = interval(1000).subscribe((nb) => {
            this.userService.getAll().subscribe()
       // }) 
        
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }
}