import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class AuthService {
    private http = inject(HttpClient);
    private apiUrl = "http://localhost:3030/users";

    private user = signal<User | null>(null)
}