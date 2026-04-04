import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../interfaces/recipes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipes-item.html',
  styleUrl: './recipes-item.css',
})
export class RecipesItem {
  @Input() recipe!: Recipe;
}