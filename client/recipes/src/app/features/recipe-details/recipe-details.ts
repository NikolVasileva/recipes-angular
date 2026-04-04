import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { ApiService } from '../../core/services/api.service';
import { Recipe } from '../../shared/interfaces/recipes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css',
})
export class RecipeDetails {

  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  // recipes$!: Observable<Recipe[]>;

  recipe$ = this.route.params.pipe(
    switchMap(params => this.apiService.getRecipeById(params['recipeId']))
  );
}