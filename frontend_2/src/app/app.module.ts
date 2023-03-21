import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



import { AddPharmacieComponent } from './components/pharmacie/add-pharmacie/add-pharmacie.component';
import { PharmacieDetailsComponent } from './components/pharmacie/pharmacie-details/pharmacie-details.component';
import { PharmacieListComponent } from './components/pharmacie/pharmacie-list/pharmacie-list.component';
import { AddMedicamentComponent } from './components/medicament/add-medicament/add-medicament.component';
import { MedicamentDetailsComponent } from './components/medicament/medicament-details/medicament-details.component';
import { MedicamentListComponent } from './components/medicament/medicament-list/medicament-list.component';
import { AddPharmacieMedicamentComponent } from './components/pharmacie-medicament/add-pharmacie-medicament/add-pharmacie-medicament.component';
import { PharmacieMedicamentListComponent } from './components/pharmacie-medicament/pharmacie-medicament-list/pharmacie-medicament-list.component';
import { PharmacieMedicamentDetailsComponent } from './components/pharmacie-medicament/pharmacie-medicament-details/pharmacie-medicament-details.component';
import { AddOrdonnanceComponent } from './components/ordonnance/add-ordonnance/add-ordonnance.component';
import { OrdonnanceListComponent } from './components/ordonnance/ordonnance-list/ordonnance-list.component';
import { OrdonnanceDetailsComponent } from './components/ordonnance/ordonnance-details/ordonnance-details.component';
import { AddClientComponent } from './components/client/add-client/add-client.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientDetailsComponent } from './components/client/client-details/client-details.component';
import { SearchComponent } from './components/search/search/search.component';
import { NavigationComponent } from './components/navigation/navigation/navigation.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './omponenent/map/map/map.component';
import { PayementComponent } from './component/payement/payement/payement.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPharmacieComponent,
    PharmacieDetailsComponent,
    PharmacieListComponent,
    AddMedicamentComponent,
    MedicamentDetailsComponent,
    MedicamentListComponent,
    AddPharmacieMedicamentComponent,
    PharmacieMedicamentListComponent,
    PharmacieMedicamentDetailsComponent,
    AddOrdonnanceComponent,
    OrdonnanceListComponent,
    OrdonnanceDetailsComponent,
    AddClientComponent,
    ClientListComponent,
    ClientDetailsComponent,
    SearchComponent,
    NavigationComponent,
    MapComponent,
    PayementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAms4aCRiNrl2e8dMBSOzvjjY4udGdYkMs',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
