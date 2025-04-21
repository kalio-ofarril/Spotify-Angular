import { JsonPipe, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService } from "@modules/auth/services/auth.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-auth-page",
  imports: [NgIf, ReactiveFormsModule, JsonPipe],
  providers: [CookieService],
  templateUrl: "./auth-page.component.html",
  styleUrl: "./auth-page.component.css",
})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private authService: AuthService, private cookie: CookieService) {}

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredential(email, password).subscribe({
      next: (v) => {
        this.errorSession = false;
        console.log("Ok auth", v)
      },
      error: (e) => {
        this.errorSession = true;
        console.error("Error auth ", e)
      },
      complete: () => console.info('complete') 
    });
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }
}
