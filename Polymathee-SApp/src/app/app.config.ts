import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importez provideHttpClient

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { MostCommonSpecialtiesComponent } from './most-common-specialties/most-common-specialties.component'
import { TopSchoolsComponent } from './top-schools/top-schools.component'
import { VilleJeunesComponent } from './ville-jeunes/ville-jeunes.component'
import { DureeFormationComponent } from './duree-formation/duree-formation.component'
import { OrganismesGestionComponent } from './organismes-gestion/organismes-gestion.component'
import { SpecialitesHandicapComponent } from './specialites-handicap/specialites-handicap.component'
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'specialites-plus-courantes', component: MostCommonSpecialtiesComponent },
  { path: 'top-etablissements', component: TopSchoolsComponent },
  { path: 'ville-jeunes', component: VilleJeunesComponent },
  { path: 'duree-formation', component: DureeFormationComponent },
  { path: 'organismes-gestion', component: OrganismesGestionComponent },
  { path: 'specialite-handicap', component: SpecialitesHandicapComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    provideHttpClient(), // Assurez-vous que cette ligne est présente dans le tableau providers
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
  ]
};