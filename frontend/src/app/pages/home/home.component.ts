import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersComponent } from '../../features/users/users.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsersComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
