import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { userService } from '../services/user.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, ReactiveFormsModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(public userService: userService,private router:Router) {}
  public username!: string;
  public password!: string;
  public email!: string;
 
  public Login() {
    if (this.username && this.password && this.email) {
      this.userService
        .getUsers()
        .pipe(
          tap((users) => {
            const user = users.find((user) => {
              return (
                user.username === this.username &&
                user.email === this.email &&
                user.password === this.password
              )
            });
            if (user) {
            this.router.navigateByUrl('/mainpage')
            }
          })
        )
        .subscribe();
    }
  }
}
