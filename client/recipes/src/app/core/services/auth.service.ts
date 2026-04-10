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
        return this.http.post<User>(`${this.apiUrl}/login`, credentials, { withCredentials: false });
    };

    register(userData: UserAuth): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/register`, userData, { withCredentials: false });
    };

    logout(): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/logout`, {}, { withCredentials: false });
    };

    setSession(user: User): void {
        this.user.set(user);
    }
    
    clearSession(): void {
        this.user.set(null);
    }
    
}