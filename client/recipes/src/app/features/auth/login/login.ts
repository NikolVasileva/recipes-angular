import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputErrorDirective } from '../../../shared/directives/input-error.directive';
import { AuthService } from '../../../core/services/auth.service';
import { emailValidator } from '../../../shared/validators/email.validator';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, InputErrorDirective],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, emailValidator]],
    password: ["", [Validators.required, Validators.minLength(4)]]
  });

  errorMessage = "";

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.errorMessage = "";

    const { email, password } =  this.loginForm.value;

    this.authService.login({ email, password }).subscribe({
      next: (user) => {
        if (user) {
          this.authService.setSession(user);
          this.router.navigate(["/recipes"])
        } else {
          this.errorMessage = "Invalid email or password"
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Please, try again! Login failed."
      }
    })
  }
}
