import { Component, inject, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],

  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = 'angular-boilerplate-primo';
  private PrimeNGConfig = inject(PrimeNGConfig);

  ngOnInit() {
    this.PrimeNGConfig.theme.set({
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities'
        }
      }
    });
    this.PrimeNGConfig.ripple.set(false);
  }
}
