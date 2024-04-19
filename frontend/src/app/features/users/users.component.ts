import { AsyncPipe, NgFor } from "@angular/common";
import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { User } from "../../core/interfaces/user.interface";
import { UsersService } from "../../core/services/users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    standalone: true,
    imports: [NgFor, AsyncPipe]
})
export class UsersComponent implements OnInit, OnDestroy {
    private userService = inject(UsersService)
    users: Observable<User[]> = this.userService.users$
    subscription!: Subscription

    ngOnInit(): void {
       // this.subscription = interval(1000).subscribe((nb) => {
            this.userService.getAll().subscribe()
       // }) 
        this.userService.search$.subscribe((str) => {
            console.log(str)
        })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}