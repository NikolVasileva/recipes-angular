import { Component, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes-item.html',
  styleUrl: './recipes-item.css',
})
export class RecipesItem {
  @Input({ required: true }) recipe!: Recipe;
}
