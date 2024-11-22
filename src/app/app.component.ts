import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './pages/auth/auth.module';
import { CampaniasModule } from './pages/campanias/campanias.module';
import { CampaniaAdminModule } from './pages/campania-admin/campania-admin.module';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthModule, CampaniasModule, CampaniaAdminModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _auth: AuthService) {}

  ngOnInit(){
    if(!localStorage.getItem('usuario')){
      alert('no hay usuarios en el localstorage!')
    }else{
      alert('hay usuarios en el localstorage  ')
    }
  }


}
