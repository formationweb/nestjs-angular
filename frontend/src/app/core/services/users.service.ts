import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    readonly url = 'http://localhost:3000/api/users'

    //constructor(private http: HttpClient) {}
    private http = inject(HttpClient)

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(this.url)
    }
}