import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { RecipesList } from './features/recipes-list/recipes-list';
import { RecipeDetails } from './features/recipe-details/recipe-details';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },

    { path: "home", component: Home },

    { path: "recipes", component: RecipesList },
    { path: "recipes/:recipeId", component: RecipeDetails}
];
