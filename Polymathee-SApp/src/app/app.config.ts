import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importez provideHttpClient

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ApprentisGraphComponent } from './apprentis-graph/apprentis-graph.component';
import { ApprentisComponent } from './apprentis/apprentis.component';
import { MostCommonSpecialtiesComponent } from './most-common-specialties/most-common-specialties.component'
import { TopSchoolsComponent } from './top-schools/top-schools.component'
import { VilleJeunesComponent } from './ville-jeunes/ville-jeunes.component'

const appRoutes: Routes = [
  { path: 'apprentis', component: ApprentisComponent }, // Ajoutez cette nouvelle route
  { path: 'specialites-plus-courantes', component: MostCommonSpecialtiesComponent },
  { path: 'top-etablissements', component: TopSchoolsComponent },
  { path: 'ville-jeunes', component: VilleJeunesComponent },

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