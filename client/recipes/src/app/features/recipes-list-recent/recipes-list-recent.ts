import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { Recipe } from '../../shared/interfaces/recipes';
import { ApiService } from '../../core/services/api.service';
import { RecipesItem } from '../../shared/components/recipes-item/recipes-item';

@Component({
  selector: 'app-recipes-list-recent',
  standalone: true,
  imports: [CommonModule, RecipesItem],
  templateUrl: './recipes-list-recent.html',
  styleUrl: './recipes-list-recent.css',
})
export class RecipesListRecent {
  recipes$!: Observable<Recipe[]>;

  constructor(private apiService: ApiService) {
    this.recipes$ = this.apiService.getLatestRecipes();
  }
}