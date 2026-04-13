import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Recipe } from "../../shared/interfaces/recipes";
import { CreateRecipe } from "../../shared/interfaces/create-recipe";

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

    getRecipeById(id: string): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.apiUrl}/recipes/${id}`);
    }

    createRecipe(data: CreateRecipe): Observable<Recipe> {
        const token = localStorage.getItem('accessToken');
      
        return this.http.post<Recipe>(
          `${this.apiUrl}/recipes`,
          data,
          {
            headers: {
              'X-Authorization': token || ''
            }
          }
        );
    }
    updateRecipe(id: string, data: CreateRecipe): Observable<Recipe> {
        const token = localStorage.getItem('accessToken');
      
        return this.http.put<Recipe>(
          `${this.apiUrl}/recipes/${id}`,
          data,
          {
            headers: {
              'X-Authorization': token || ''
            }
          }
        );
    }

    deleteRecipe(id: string) {
        const token = localStorage.getItem('accessToken');
      
        return this.http.delete(
          `${this.apiUrl}/recipes/${id}`,
          {
            headers: {
              'X-Authorization': token || ''
            }
          }
        );
    }

    updateUserFavorites(userId: string, favorites: string[]) {
        const token = localStorage.getItem('accessToken');
      
        return this.http.put(
          `http://localhost:3030/users/${userId}`,
          { favorites },
          {
            headers: {
              'X-Authorization': token || ''
            }
          }
        );
    }
}