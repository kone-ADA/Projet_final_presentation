import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { PayementComponent } from './component/payement/payement/payement.component';
import { PharmacieMedicamentDetailsComponent } from './components/pharmacie-medicament/pharmacie-medicament-details/pharmacie-medicament-details.component';
import { PharmacieMedicamentListComponent } from './components/pharmacie-medicament/pharmacie-medicament-list/pharmacie-medicament-list.component';
import { SearchComponent } from './components/search/search/search.component';
import { MapComponent } from './omponenent/map/map/map.component';


const options: ExtraOptions = {
  onSameUrlNavigation: 'reload'
}

const routes: Routes = [
  { path: '', redirectTo: 'medicaments', pathMatch: 'full' },
  { path: 'medicaments', component:PharmacieMedicamentListComponent },
  { path: 'map/:nom_commercial', component:MapComponent },
  { path: 'medicaments/:id', component:PharmacieMedicamentListComponent },
  {path: 'recherche/:nom_commercial',component:SearchComponent},
  {path:'details/:nom_commercial', component:PharmacieMedicamentDetailsComponent},
  {path:'payement', component:PayementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
