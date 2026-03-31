import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../interfaces/recipes';

@Component({
  selector: 'app-recipes-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes-item.html',
  styleUrl: './recipes-item.css',
})
export class RecipesItem {
  @Input() recipe!: Recipe;
}