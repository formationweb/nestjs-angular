import { NgFor } from "@angular/common";
import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { Subscription, interval } from "rxjs";
import { User } from "../../core/interfaces/user.interface";
import { UsersService } from "../../core/services/users.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    standalone: true,
    imports: [NgFor]
})
export class UsersComponent implements OnInit, OnDestroy {
    private userService = inject(UsersService)
    users: User[] = []
    subscription!: Subscription

    ngOnInit(): void {
        this.subscription = interval(1000).subscribe((nb) => {
            this.userService.getAll().subscribe({
                next: (users: User[]) => {
                    this.users = users
                },
                complete: () => {
                    //console.log('finish')
                }
            })
        }) 
        this.userService.search$.subscribe((str) => {
            console.log(str)
        })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}