import { Component } from '@angular/core';
import { PharmacieMedicament } from 'src/app/models/pharmacie-medicament.model';
import { PharmacieMedicamentService } from 'src/app/services/pharmacie-medicament.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pharmacie-medicament-list',
  templateUrl: './pharmacie-medicament-list.component.html',
  styleUrls: ['./pharmacie-medicament-list.component.css'],

})
export class PharmacieMedicamentListComponent {
  pharmaciesmedicaments?: PharmacieMedicament[];
  currentmedicaments: PharmacieMedicament = {};
  currentIndex = -1;
  nom_commercial = '';

  constructor(private pharmaciemedicamentservice: PharmacieMedicamentService,private router: Router) { }

  ngOnInit(): void {
    this.retrievemedicaments();
  }

  retrievemedicaments(): void {
    // this.pharmaciemedicamentservice.getAll()
    //   .subscribe({
    //     next: (data) => {
    //       this.pharmaciesmedicaments = data;
    //       console.log(data);
    //     },
    //     error: (e) => console.error(e)
    //   });
  }

  refreshList(): void {
    this.retrievemedicaments();
    this.currentmedicaments = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(pharmaciemedicament: PharmacieMedicament, index: number): void {
    this.currentmedicaments = pharmaciemedicament;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.pharmaciemedicamentservice.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentmedicaments = {};
    this.currentIndex = -1;

    this.pharmaciemedicamentservice.findByTitle(this.nom_commercial)
      .subscribe({
        next: (data) => {
          this.pharmaciesmedicaments = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
