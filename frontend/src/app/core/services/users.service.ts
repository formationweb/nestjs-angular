import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // store
  readonly url = 'http://localhost:3000/api/users';
  private _search$: BehaviorSubject<string> = new BehaviorSubject(''); // state
  readonly search$: Observable<string> = this._search$.asObservable(); // getter ou selector

  private _users$: BehaviorSubject<User[]> = new BehaviorSubject([] as User[]);
  readonly users$: Observable<User[]> = this._users$.asObservable();

  usersFiltered$: Observable<User[]> = combineLatest([ this.search$, this.users$ ])
    .pipe(
      map(([search, users]) => users.filter(user => user.name.includes(search)))
    )

  //constructor(private http: HttpClient) {}
  private http = inject(HttpClient);

  setSearch(str: string) {
    this._search$.next(str); // mutation
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id)
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users) => {
        this._users$.next(users);
      })
    );
  }

  update(id: number, payload: Omit<User, 'id'>): Observable<User> {
    return this.http.put<User>(this.url + '/' + id, payload)
      .pipe(
        tap((user: User) => {
          const usersUpdated = this._users$.value.map(currentUser => {
            if (currentUser.id == id) {
                return user
            }
            return currentUser
          })
          this._users$.next(usersUpdated)
        })
      )
  }
}
