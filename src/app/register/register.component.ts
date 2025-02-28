import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
// import { ErrorComponent } from '../error/error.component';
import { NgClass } from '@angular/common';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgClass, ErrorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  @Output() login = new EventEmitter();

  public userForm = new FormGroup({
    // username: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(3),
    //   Validators.maxLength(10),
    //   // usernameValidator(),
    // ]),
    // email: new FormControl('', [Validators.required, Validators.email]),
    // password: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(3),
    //   Validators.maxLength(10),
    //   Validators.pattern('^[a-zA-Z0-9]*$'),
    // ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  public Register() {
    console.log('register');
    console.log(this.userForm);
    console.log(this.userForm.valid);
  }

  public get usernameControl(): FormControl {
    return this.userForm.get('username') as FormControl;
  }
  public get passwordControl(): FormControl {
    return this.userForm.get('password') as FormControl;
  }
  public get emailControl(): FormControl {
    return this.userForm.get('email') as FormControl;
  }
}

