import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  isAuthenticated: boolean = false;
  nomeUsuario: string = '';
  emailUsuario: string = '';

  ngOnInit() {
    var data = localStorage.getItem('agendaapp');

    if (data != null) {
      this.isAuthenticated = true;
      this.nomeUsuario = JSON.parse(data).nome;
      this.emailUsuario = JSON.parse(data).email;
    }
  }

  logout() {
    if (confirm('Deseja realmente sair do sistema?')) {
      localStorage.removeItem('agendaapp');
      location.href = '/';
    }
  }
}
