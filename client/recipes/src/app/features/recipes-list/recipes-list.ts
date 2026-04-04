import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecipesItem } from '../../shared/components/recipes-item/recipes-item';
import { Observable } from 'rxjs';
import { Recipe } from '../../shared/interfaces/recipes';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule, RecipesItem],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
})
export class RecipesList {
  recipes$!: Observable<Recipe[]>;

  constructor(private apiService: ApiService) {
    this.recipes$ = this.apiService.getAllRecipes();
  }
}
