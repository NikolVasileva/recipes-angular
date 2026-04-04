import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { RecipesList } from './features/recipes-list/recipes-list';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },

    { path: "home", component: Home },

    { path: "recipes", component: RecipesList }
];
