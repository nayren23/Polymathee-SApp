import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  constructor(private router: Router) { }

  items = [
    {
      label: 'Spécialités Plus Courantes',
      icon: 'pi pi-bookmark', // Icône pour Spécialités
      command: () => this.router.navigate(['/specialites-plus-courantes'])
    },
    {
      label: 'Top Établissements',
      icon: 'pi pi-building', // Icône pour Établissements
      command: () => this.router.navigate(['/top-etablissements'])
    },
    {
      label: 'Ville des Jeunes',
      icon: 'pi pi-map', // Icône pour Ville des Jeunes
      command: () => this.router.navigate(['/ville-jeunes'])
    },
    {
      label: 'Durée de Formation',
      icon: 'pi pi-clock', // Icône pour Durée de Formation
      command: () => this.router.navigate(['/duree-formation'])
    },
    {
      label: 'Organismes de Gestion',
      icon: 'pi pi-cogs', // Icône pour Organismes de Gestion
      command: () => this.router.navigate(['/organismes-gestion'])
    },
    {
      label: 'Spécialité Handicap',
      icon: 'pi pi-user', // Icône pour Spécialité Handicap
      command: () => this.router.navigate(['/specialite-handicap'])
    }
  ];

}