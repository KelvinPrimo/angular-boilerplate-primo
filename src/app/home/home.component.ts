import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarModule, AvatarModule, DockModule, RadioButtonModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;

  position: string = 'bottom';

  positionOptions = [
      {
          label: 'Bottom',
          value: 'bottom'
      },
      {
          label: 'Top',
          value: 'top'
      },
      {
          label: 'Left',
          value: 'left'
      },
      {
          label: 'Right',
          value: 'right'
      }
  ];

  ngOnInit() {
      this.items = [
          {
              label: 'Finder',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
          },
          {
              label: 'App Store',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
          },
          {
              label: 'Photos',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
          },
          {
              label: 'Trash',
              icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
          }
      ];
  }
}
