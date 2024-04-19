import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../core/interfaces/user.interface';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private userService = inject(UsersService)
  private builder = inject(FormBuilder)
  user: User = {} as User

  //propName = new FormControl<string>('')
  form: FormGroup = this.builder.group({
    name: '',
    email: ''
  })

  ngOnInit(): void {
      const id = this.route.snapshot.params['id']
      this.userService.get(id).subscribe((user: User) => {
         this.user = user
         this.form.patchValue(this.user)
      })
  }

  edit() {

  }
}
