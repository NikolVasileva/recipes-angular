import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipes';

@Component({
  selector: 'app-recipes-item',
  imports: [],
  templateUrl: './recipes-item.html',
  styleUrl: './recipes-item.css',
})
export class RecipesItem {
  @Input({ required: true }) recipe!: Recipe;
}
