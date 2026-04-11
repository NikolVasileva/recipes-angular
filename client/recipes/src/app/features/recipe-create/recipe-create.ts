import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputErrorDirective } from '../../shared/directives/input-error.directive';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-recipe-create',
  imports: [CommonModule, FormsModule, InputErrorDirective],
  standalone: true,
  templateUrl: './recipe-create.html',
  styleUrl: './recipe-create.css',
})
export class RecipeCreate {
  @ViewChild("recipeForm") recipeForm!: NgForm;

  title = "";
  description = "";
  category = "";
  imageUrl = "";
  ingredients = "";
  cookTime = 0;
  servings = 0;
  difficulty = "";

  private router = inject(Router);
  private apiService = inject(ApiService);
  private notifService = inject(NotificationService);

  onSubmit(): void {
    if (this.recipeForm.invalid) {
      return;
    }

    this.apiService
      .createRecipe({
        _createdOn: Date.now(),
        title: this.title,
        description: this.description,
        category: this.category,
        imageUrl: this.imageUrl,
        ingredients: this.ingredients,
        cookTime: this.cookTime,
        servings: this.servings,
        difficulty: this.difficulty,
      })
      .subscribe({
        next: (recipe) => {
          this.notifService.showSuccess('Recipe created successfully');
          this.router.navigate(["/recipes", recipe._id]);
        },
        error: (err) => {
          this.notifService.showError(err.error.message);
        },
      });
  }

  onCancel(): void {
    this.router.navigate(["/recipes"]);
  }
}
