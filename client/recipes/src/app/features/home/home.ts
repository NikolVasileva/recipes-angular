import { Component } from '@angular/core';
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner';

@Component({
  selector: 'app-home',
  imports: [HeroBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
