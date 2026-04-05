import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-create',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './recipe-create.html',
  styleUrl: './recipe-create.css',
})
export class RecipeCreate {}
