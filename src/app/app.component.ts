import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AuthenticationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Front-end';

  ngOnInit(): void {
    this.verificarToken()
  }


  verificarToken() {
    if (!localStorage.getItem('token')) {
      console.log('no hay token, no hay usuario')
    }
  }

}
