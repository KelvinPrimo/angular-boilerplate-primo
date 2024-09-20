import { Component, inject, OnInit } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, SelectModule ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-boilerplate-primo';
  animation: boolean = true;

  animations = [
    { name: 'Fade', code: 'fade' },
    { name: 'Slide', code: 'slide' },
    { name: 'Slide Horizontal', code: 'slide' },
    { name: 'Slide Vertical', code: 'slide' },
    { name: 'Scale', code: 'scale' }
  ]

  dynamicAnimationClasses: string = 'p-dialog p-dialog-visible p-dialog-rtl p-dialog-draggable p-dialog-resizable p-dialog-modal p-dialog-focus-trap';

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
    this.PrimeNGConfig.ripple.set(true);
  }



  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
