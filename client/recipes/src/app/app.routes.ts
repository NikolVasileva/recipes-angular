import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { RecipesList } from './features/recipes-list/recipes-list';
import { RecipeDetails } from './features/recipe-details/recipe-details';
import { RecipeCreate } from './features/recipe-create/recipe-create';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },

    { path: "home", component: Home },

    { path: "recipes", component: RecipesList },
    { path: "recipes/:recipeId", component: RecipeDetails},
    { path: "recipe-create", component: RecipeCreate},

    { path: "register", component: Register},
    { path: "login", component: Login},
];
