import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './recipe-edit.html',
})
export class RecipeEdit {
  @ViewChild('recipeForm') recipeForm!: NgForm;

  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  private router = inject(Router);
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);
  private notif = inject(NotificationService);

  recipeId = '';

  title = '';
  description = '';
  category = '';
  imageUrl = '';
  ingredients = '';
  cookTime = 0;
  servings = 0;
  difficulty = '';

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => {
          this.recipeId = params['recipeId'];
          return this.apiService.getRecipeById(this.recipeId);
        })
      )
      .subscribe(recipe => {
        const user = this.authService.currentUser();

        if (!user || user._id !== (recipe as any)._ownerId) {
          this.router.navigate(['/']);
          return;
        }

        this.title = recipe.title;
        this.description = recipe.description;
        this.category = recipe.category;
        this.imageUrl = recipe.imageUrl;
        this.ingredients = recipe.ingredients;
        this.cookTime = recipe.cookTime;
        this.servings = recipe.servings;
        this.difficulty = recipe.difficulty;

        this.cdr.detectChanges();
      });
  }
 

  onSubmit() {
    if (this.recipeForm.invalid) return;
  
    this.apiService.updateRecipe(this.recipeId, {
      _createdOn: Date.now(),
      title: this.title,
      description: this.description,
      category: this.category,
      imageUrl: this.imageUrl,
      ingredients: this.ingredients,
      cookTime: this.cookTime,
      servings: this.servings,
      difficulty: this.difficulty,
    }).subscribe({
      next: () => {
        this.notif.showSuccess('Recipe updated successfully!');
        this.router.navigate(['/recipes', this.recipeId]);
      },
      error: () => {
        this.notif.showError('Update failed!');
      }
    });
  }
}