import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PharmacieMedicament } from 'src/app/models/pharmacie-medicament.model';
import { PharmacieMedicamentService } from 'src/app/services/pharmacie-medicament.service';

@Component({
  selector: 'app-pharmacie-medicament-details',
  templateUrl: './pharmacie-medicament-details.component.html',
  styleUrls: ['./pharmacie-medicament-details.component.css']
})
export class PharmacieMedicamentDetailsComponent {
  currentmedicaments: PharmacieMedicament = {};
  data?: PharmacieMedicament[];
  nom_commercial = this.route.snapshot.params['nom_commercial'];
  dtOptions: any = {};



  constructor(private pharmaciemedicamentservice: PharmacieMedicamentService,
    private route: ActivatedRoute) {}


  ngOnInit() {
    this.pharmaciemedicamentservice.find(this.nom_commercial)
    .subscribe({
      next: (data) => {
        this.data = data;
        console.log(data[0]);
      },
      error: (e) => console.error(e)
    });
}
}
