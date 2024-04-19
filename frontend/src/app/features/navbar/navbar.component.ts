import { Component, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  search = new FormControl()
  userService = inject(UsersService)

  ngOnInit(): void {
      this.userService.getAll().subscribe()
      this.search.valueChanges
      .pipe(
        filter(str => str.length >= 3),
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe((str) => {
         this.userService.setSearch(str) // action
      })
  }
}
