import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campania-admin',
  templateUrl: './campania-admin.component.html',
  styleUrl: './campania-admin.component.css'
})
export class CampaniaAdminComponent {

  constructor(private router:Router){
  }

  gotToAddCampaing(){
    this.router.navigate(['campania-admin/crear-campania'])
  }

  gotTocampaingEstate(){
    this.router.navigate(['campania-admin/estado-campania'])
  }

  goToCampaingReport(){
    this.router.navigate(['campania-admin/reportes'])
  }



}
