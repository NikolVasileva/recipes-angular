import { Component, inject } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipesItem } from '../../shared/components/recipes-item/recipes-item';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule, RecipesItem],
  templateUrl: './favorites.html',
})
export class Favorites {

  private apiService = inject(ApiService);
  private authService = inject(AuthService);

  user = this.authService.currentUser;

  favorites$ = this.apiService.getAllRecipes().pipe(
    switchMap(recipes => {
      const favIds = this.user()?.favorites || [];
      return [recipes.filter(r => favIds.includes(r._id))];
    })
  );
}