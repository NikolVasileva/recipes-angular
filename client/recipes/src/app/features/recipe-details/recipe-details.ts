// import { Component, inject, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ApiService } from '../../core/services/api.service';
// import { Recipe } from '../../shared/interfaces/recipes';

// @Component({
//   selector: 'app-recipe-details',
//   imports: [],
//   templateUrl: './recipe-details.html',
//   styleUrl: './recipe-details.css',
// })
// export class RecipeDetails implements OnInit {
//   private route  = inject(ActivatedRoute);
//   private apiService = inject(ApiService);

//   recipe: Recipe | null = null;
//   recipeId = "";

//   ngOnInit(): void {
//     this.recipeId = this.route.snapshot.params["recipeId"];
//     this.recipeDetails()
//   };

//   recipeDetails(): void {
//     recipe$ = this.route.params.pipe(
//       switchMap(params => this.apiService.getRecipeById(params['recipeId']))
//     );
//   }
// }

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