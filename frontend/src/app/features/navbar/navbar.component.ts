import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit, effect, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { AppService } from '../../core/services/app.service';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  search = new FormControl()
  userService = inject(UsersService)
  appService = inject(AppService)
  users$ = this.userService.users$
  title = this.appService.title

  constructor() {
    effect(() => {
      console.log(this.title())
    })
  }

  ngOnInit(): void {
      this.userService.getAll().subscribe()
      this.search.valueChanges
      .pipe(
       // filter(str => str.length >= 3),
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe((str) => {
         this.userService.setSearch(str) // action
      })

      setInterval(() => {
        this.title.set(''+Math.random())
      }, 1000)
  }
}
