import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PharmacieMedicament } from 'src/app/models/pharmacie-medicament.model';
import { PharmacieMedicamentService } from 'src/app/services/pharmacie-medicament.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  currentmedicaments: PharmacieMedicament = {};
  data?: PharmacieMedicament[];
  markers:any[] = [];
  nom_commercial = this.route.snapshot.params['nom_commercial'];
  dtOptions: any = {};
  lat = 7.5468545;
  long = -5.547099500000002;
  zoom=7;

  longitude:any
  latitude:any
  nom_pharmacie:any
  constructor(private pharmaciemedicamentservice: PharmacieMedicamentService,
    private route: ActivatedRoute) {}


  ngOnInit() {
    this.pharmaciemedicamentservice.map(this.nom_commercial)
    .subscribe({
      next: (data) => {
        this.data = data;
        data.forEach(element => {
          let marker =   {

            lat: element.latitude,

            lng: element.longitude,

            label: element.nom_pharmacie

        }
        this.markers.push(marker);
        });

        console.log(this.markers)
      },
      error: (e) => console.error(e)
    });
  }


}
