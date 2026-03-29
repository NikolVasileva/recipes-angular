import { Component } from '@angular/core';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';
import { RecipesListRecent } from '../recipes-list-recent/recipes-list-recent';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroBanner, RecipesListRecent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
