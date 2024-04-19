import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
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

  ngOnInit(): void {
      setTimeout(() => {
        this.propEmail.setValue('test')
      }, 1000)
  }

  login() {
    this.submitted = true
    if (this.form.invalid) return
    console.log(this.form.value)
  }
}
