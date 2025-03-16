import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Iuser } from '../interface/interface';
import { ErrorComponent } from '../error/error.component';
import { RouterLink } from '@angular/router';
import { userService } from '../services/user.service';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ErrorComponent, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(public userservice: userService) {}
  public userForm = new FormGroup({
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

  public get usernameControl(): FormControl {
    return this.userForm.get('username') as FormControl;
  }
  public get passwordControl(): FormControl {
    return this.userForm.get('password') as FormControl;
  }
  public get emailControl(): FormControl {
    return this.userForm.get('email') as FormControl;
  }
  public Register() {
    if (this.userForm.valid) {
      const userInfo = this.userForm.value as Iuser;
      this.userservice.createUser(userInfo).subscribe();
    }
  }
}
