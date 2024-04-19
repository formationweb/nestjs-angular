import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { domainValidator } from '../../core/validators/domain.validator';
import { emailExistsValidator } from '../../core/validators/email-exists.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  propEmail = new FormControl<string>('', [
    Validators.required,
    Validators.email,
    Validators.minLength(3),
    domainValidator('hotmail.com')
  ], [
    emailExistsValidator()
  ])
  propPass = new FormControl<string>('')
  form = new FormGroup({
    email: this.propEmail,
    password: this.propPass
  })
  submitted = false

  login() {
    this.submitted = true
    if (this.form.invalid) return
    console.log(this.form.value)
  }
}
