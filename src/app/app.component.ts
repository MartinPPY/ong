import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { HttpClientModule } from '@angular/common/http';
import { AuthenticacionService } from './services/authentication/authenticacion.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SweetAlert2Module, AuthenticationModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Front-end';
  private _authService = inject(AuthenticacionService)
  cargo = JSON.parse(localStorage.getItem('cargo') || '')

  ngOnInit(): void {
    this.verificarToken()
  }


  verificarToken(): boolean {
    if (!localStorage.getItem('token')) {
      return false
    } else {
      return true
    }
  }

  logout() {
    this._authService.logout()
  }

}
