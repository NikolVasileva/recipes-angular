import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/interfaces/recipes';
import { ApiService } from '../../core/services/api.service';
import { RecipesItem } from '../../shared/components/recipes-item/recipes-item';

@Component({
  selector: 'app-recipes-list-recent',
  standalone: true,
  imports: [RecipesItem],
  templateUrl: './recipes-list-recent.html',
  styleUrl: './recipes-list-recent.css',
})
export class RecipesListRecent implements OnInit{
  recipes: Recipe[] = [];

  constructor(private apiService: ApiService){}


  ngOnInit(): void {
    this.apiService.getLatestRecipes().subscribe((recipes) => {
      this.recipes = recipes;

      console.log(this.recipes);
    });
  }
}

