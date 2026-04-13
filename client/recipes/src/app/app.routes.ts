import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { RecipesList } from './features/recipes-list/recipes-list';
import { RecipeDetails } from './features/recipe-details/recipe-details';
import { RecipeCreate } from './features/recipe-create/recipe-create';
import { Register } from './features/auth/register/register';
import { Login } from './features/auth/login/login';
import { RecipeEdit } from './features/recipe-edit/recipe-edit';
import { Favorites } from './features/favorites/favorites';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },

    { path: "home", component: Home },

    { path: "recipes", component: RecipesList },
    { path: "recipes/:recipeId", component: RecipeDetails},
    { path: "recipe-create", component: RecipeCreate},
    { path: 'recipes/edit/:recipeId', component: RecipeEdit },
    { path: 'recipes-favorites', component: Favorites },

    { path: "register", component: Register},
    { path: "login", component: Login},
];
