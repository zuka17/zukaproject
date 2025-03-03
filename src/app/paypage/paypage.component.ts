import { Component } from '@angular/core';
import { FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators, } from '@angular/forms';
import {RouterLink } from '@angular/router';

@Component({
  selector: 'app-paypage',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './paypage.component.html',
  styleUrl: './paypage.component.scss',
})
export class PaypageComponent {
  public payForm = new FormGroup({
    addres: new FormControl('', [Validators.required]),
    cardnumber: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
    ]),
    phonenumber: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
  });
}
