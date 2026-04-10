import { Component, computed, inject } from '@angular/core';
import { RouterLink, Router, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoggedIn = this.authService.isLoggedIn;
  email = computed(() => this.authService.currentUser()?.email ?? '');

  onLogout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearSession();
        this.router.navigate(['/home']);
      },
      error: () => {
        this.authService.clearSession();
        this.router.navigate(['/home']);
      }
    });
  }
}
