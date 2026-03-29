import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Recipe } from "../../shared/interfaces/recipes";

@Injectable({
    providedIn: "root"
})

export class ApiService {
    private apiUrl = "http://localhost:3030/data";

    constructor(private http: HttpClient) {}

    getAllRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.apiUrl}/recipes`)
    }

    getLatestRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.apiUrl}/recipes?sortBy=_createdOn%20desc&pageSize=4`)
    }
}