import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthModule } from './pages/auth/auth.module';
import { CampaniasModule } from './pages/campanias/campanias.module';
import { CampaniaAdminModule } from './pages/campania-admin/campania-admin.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthModule, CampaniasModule, CampaniaAdminModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app';

  constructor(private _auth: AuthService) {

  }


  verificarToken(): boolean {
    return this._auth.verificarToken()
  }

}
