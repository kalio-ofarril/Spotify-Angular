import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  imports: [NgIf,ReactiveFormsModule, JsonPipe],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit{

  formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService) {}

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredential(email,password);
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
    })
  }

}
