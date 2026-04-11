import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputErrorDirective } from '../../../shared/directives/input-error.directive';
import { AuthService } from '../../../core/services/auth.service';
import { emailValidator } from '../../../shared/validators/email.validator';
import { matchPasswordsValidator } from '../../../shared/validators/match-passwords.validator';
import { NotificationService } from '../../../core/services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, InputErrorDirective],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private notifService = inject(NotificationService);

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

    const { email, passwords } = this.registerForm.value;

    const userData = {
      email,
      password: passwords.password,
    };

    this.authService.register(userData).subscribe({
      next: (user) => {
        this.authService.setSession(user);
        this.notifService.showSuccess('Register successful');
        this.router.navigate(['/recipes']);
      },
      // error: (err) => {
      //   this.notifService.showError(err.message);
      // }


      // error: (err) => {
      //   const message = err.error?.message || 'Register failed';
      //   this.notifService.showError(message);
      // }

      error: (err) => {
        console.log('🔥 ERROR CALLBACK HIT', err);
      
        const message = err.error?.message || 'Register failed';
        this.notifService.showError(message);
      }

      // error: (err) => {
      //   console.log('REGISTER ERROR:', err);

      //   const message =
      //     err.error?.message ||
      //     'Register unsuccessful';

      //   this.notifService.showError(message);
      // }
    });
  }
}