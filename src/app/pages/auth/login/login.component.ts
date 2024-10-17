import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  cargando: boolean = false

  constructor(private router: Router) {

  }


  login() {
    this.cargando = true
    setTimeout(() => {
    }, 10000);
    this.router.navigate(['home'])
  }

}
