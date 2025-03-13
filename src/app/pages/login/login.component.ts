import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
