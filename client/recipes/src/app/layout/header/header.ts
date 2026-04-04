import { Component, inject } from '@angular/core';
import { RouterLink, Router, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // private router = inject(Router);
}
