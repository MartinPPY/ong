import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
