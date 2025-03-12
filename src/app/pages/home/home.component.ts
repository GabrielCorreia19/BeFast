import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
