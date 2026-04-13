import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { LoginData, User, UserAuth } from "../../shared/interfaces/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:3030/users";

  private user = signal<User | null>(null);

  isLoggedIn = computed(() => this.user() !== null);
  currentUser = computed(() => this.user());

  login(credentials: LoginData): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, credentials);
  }

  register(userData: UserAuth): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, userData);
  }

  logout(): Observable<void> {
    const token = localStorage.getItem('accessToken');

    return this.http.post<void>(
      `${this.apiUrl}/logout`,
      {},
      {
        headers: {
          'X-Authorization': token || ''
        }
      }
    );
  }

  initSession(): void {
    const userJson = localStorage.getItem('user');
  
    if (userJson) {
      const user: User = JSON.parse(userJson);
      this.user.set(user);
    }
  }

  setSession(user: User): void {
    this.user.set(user);
    localStorage.setItem('accessToken', user.accessToken);
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearSession(): void {
    this.user.set(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }

  updateUser(user: User): void {
    this.user.set(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

}