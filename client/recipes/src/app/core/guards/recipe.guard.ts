import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { catchError, map, of } from 'rxjs';

export const recipeGuard: CanActivateFn = (route) => {
  const api = inject(ApiService);
  const router = inject(Router);

  const recipeId = route.paramMap.get('recipeId');

  if (!recipeId) {
    return router.createUrlTree(['/404']);
  }

  return api.getRecipeById(recipeId).pipe(
    map(recipe => {
      if (recipe) {
        return true;
      }

      return router.createUrlTree(['/404']);
    }),
    catchError(() => {
      return of(router.createUrlTree(['/404']));
    })
  );
};