import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [MatIconModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  constructor(private router: Router) {}

  backToLogin() {
    this.router.navigate(['/login']);
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
