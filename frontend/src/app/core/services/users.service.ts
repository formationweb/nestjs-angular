import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UsersService { // store
    readonly url = 'http://localhost:3000/api/users'
    private _search$: BehaviorSubject<string> = new BehaviorSubject('') // state
    readonly search$: Observable<string> = this._search$.asObservable() // getter ou selector

    //constructor(private http: HttpClient) {}
    private http = inject(HttpClient)

    setSearch(str: string) {
        this._search$.next(str) // mutation
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.url)
    }
}