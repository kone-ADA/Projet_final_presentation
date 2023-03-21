import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute,ActivatedRouteSnapshot } from '@angular/router';
import { PharmacieMedicament } from 'src/app/models/pharmacie-medicament.model';
import { PharmacieMedicamentService } from 'src/app/services/pharmacie-medicament.service';
declare let $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pharmaciesmedicaments?: PharmacieMedicament[];
  currentmedicaments: PharmacieMedicament = {};
  currentIndex = -1;

  data?: PharmacieMedicament[];
  nom_commercial = this.route.snapshot.params['nom_commercial'];
  dtOptions: any = {};
  @Input() viewMode = false;

  @Input() currentpharmaciemedicament: PharmacieMedicament = {
    pharmacie_id: 1,
    medicament_id:1,
    nom_commercial:'',
    nom_pharmacie: '',
    longitude: '',
    latitude: '',
    commune:'',
    garde : true
  };


  longitude:any
  latitude:any
  constructor(private pharmaciemedicamentservice: PharmacieMedicamentService,
    private route: ActivatedRoute) {}


  ngOnInit() {
    this.pharmaciemedicamentservice.findByTitle(this.nom_commercial)
      .subscribe((ret: any[])=>{
      this.data = ret;
      setTimeout(()=>{
        $('#datatableexample').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu : [5, 10, 25],
          order:[[1,"desc"]]
      } );
      }, 1);


  });

}
search(): void {
  this.currentmedicaments = {};
  this.currentIndex = -1;

  this.pharmaciemedicamentservice.find(this.nom_commercial)
    .subscribe({
      next: (data) => {
        this.pharmaciesmedicaments = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
}



map():void{
  this.currentmedicaments = {};
  this.currentIndex = -1;

  this.pharmaciemedicamentservice.map(this.nom_commercial)
    .subscribe({
      next: (data) => {
        this.pharmaciesmedicaments = data;
        this.longitude = data[0].longitude
        console.log(this.longitude)
        console.log(data);
      },
      error: (e) => console.error(e)
    });
}
}
