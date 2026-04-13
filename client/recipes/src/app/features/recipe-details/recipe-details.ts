import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { ApiService } from '../../core/services/api.service';
import { Recipe } from '../../shared/interfaces/recipes';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css',
})
export class RecipeDetails {

  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private notif = inject(NotificationService);

  // recipes$!: Observable<Recipe[]>;

  recipe$ = this.route.params.pipe(
    switchMap(params => this.apiService.getRecipeById(params['recipeId']))
  );

  // recipe$: Observable<Recipe> = this.route.params.pipe(
  //   switchMap(params => this.apiService.getRecipeById(params['id']))
  // );

  currentUser = this.authService.currentUser;

  isOwner(recipe: Recipe): boolean {
    const user = this.authService.currentUser();
    return !!user && user._id === (recipe as any)._ownerId;
  }

  deleteRecipe(id: string): void {
    if (!confirm('Are you sure you want to delete this recipe?')) return;
  
    this.apiService.deleteRecipe(id).subscribe({
      next: () => {
        this.notif.showSuccess('Recipe deleted successfully!');
        this.router.navigate(['/recipes']);
      },
      error: () => {
        this.notif.showError('Failed to delete recipe!');
      }
    });
  }

  toggleFavorite(recipe: any): void {
    const user = this.authService.currentUser();
  
    if (!user) return;
  
    const favorites = user.favorites ?? [];
    const isFav = favorites.includes(recipe._id);
  
    const updatedFavorites = isFav
      ? favorites.filter(id => id !== recipe._id)
      : [...favorites, recipe._id];
  
    this.apiService.updateUserFavorites(user._id, updatedFavorites)
      .subscribe({
        next: () => {
          this.authService.updateUser({
            ...user,
            favorites: updatedFavorites
          });
  
          this.notif.showSuccess(
            isFav ? 'Removed from favorites ❤️' : 'Added to favorites ❤️'
          );
        },
        error: () => {
          this.notif.showError('Failed to update favorites');
        }
      });
  }

  checkFavorite(recipe: any): boolean {
    const user = this.authService.currentUser();
  
    return user?.favorites?.includes(recipe._id) ?? false;
  }

}