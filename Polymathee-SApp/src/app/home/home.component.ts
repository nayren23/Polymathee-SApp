import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, TimelineModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  timelineEvents = [
    {
      title: 'Lancement du projet',
      detail: 'Compréhension des données et constitution de l’équipe',
      icon: '1'
    },
    {
      title: 'Modélisation de la base',
      detail: 'Conception du modèle E-A',
      icon: '2'
    },
    {
      title: 'Requêtage SQL',
      detail: 'Écriture et test des requêtes complexes',
      icon: '3'
    },
    {
      title: 'Développement de l’interface',
      detail: 'Frontend Angular + Backend Flask',
      icon: '4'
    },
    {
      title: 'Data visualisation',
      detail: 'Création de graphiques et tableaux interactifs',
      icon: '5'
    },
    {
      title: 'Livrable final',
      detail: 'Préparation du PDF + dépôt sur Moodle',
      icon: '6'
    }
  ];
}  
