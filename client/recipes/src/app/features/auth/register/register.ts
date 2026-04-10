import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputErrorDirective } from '../../../shared/directives/input-error.directive';
import { AuthService } from '../../../core/services/auth.service';
import { emailValidator } from '../../../shared/validators/email.validator';
import { matchPasswordsValidator } from '../../../shared/validators/match-passwords.validator';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, InputErrorDirective],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  errorMessage = '';
  submitted = false;

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: matchPasswordsValidator }
    ),
  });

  get passwordsGroup(): FormGroup {
    return this.registerForm.get('passwords') as FormGroup;
  }

  onRegister(): void {
    this.submitted = true;
    
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formValue = this.registerForm.getRawValue();

    const userData = {
      email: formValue.email,
      password: formValue.passwords.password,
    };

    this.authService.register(userData).subscribe({
      next: (user) => {
        this.authService.setSession(user);
        this.router.navigate(['/recipes']);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'User already exists or registration failed.';
      }
    });
  }
}