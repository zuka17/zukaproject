import { Component } from '@angular/core';
import {  Router, RouterLink } from '@angular/router';
import { userService } from '../services/user.service';

@Component({
  selector: 'app-mainpage',
  imports: [RouterLink],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss',
})
export class MainpageComponent {
   constructor(private router:Router) {}
  public logout() {
       this.router.navigateByUrl('/login');
   }
}
