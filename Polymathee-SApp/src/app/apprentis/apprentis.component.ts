import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Assurez-vous que le chemin d'importation est correct
import { CommonModule } from '@angular/common'; // Importez CommonModule si vous utilisez des directives comme *ngIf, *ngFor

@Component({
  selector: 'app-apprentis',
  standalone: true,
  imports: [CommonModule], // Ajoutez CommonModule aux imports
  templateUrl: './apprentis.component.html',
  styleUrl: './apprentis.component.css'
})
export class ApprentisComponent implements OnInit {
  apprentis: any[] = [];
  errorMessage: string = '';

  constructor(private apiService: ApiService) {
    console.log('ApprentisComponent constructor called')
  }

  ngOnInit(): void {
    console.log('ApprentisComponent ngOnInit called')
    this.loadApprentis();
  }

  loadApprentis(): void {
    this.apiService.getMostCommonSpecialties().subscribe({
      next: (data) => {
        this.apprentis = data;
        console.log('Données reçues de l\'API :', data)
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la récupération des données des apprentis.'
        console.error('Erreur API:', error)
      }
    });
  }
}