import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Assurez-vous que le chemin d'importation est correct
import { CommonModule } from '@angular/common'; // Importez CommonModule si vous utilisez des directives comme *ngIf, *ngFor
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-most-common-specialties',
  standalone: true,
  imports: [CommonModule, TableModule, IconFieldModule, InputIconModule],
  templateUrl: './most-common-specialties.component.html',
  styleUrl: './most-common-specialties.component.css'
})
export class MostCommonSpecialtiesComponent implements OnInit {
  specialties: any[] = [];
  errorMessage: string = '';
  loading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadSpecialties();
  }

  loadSpecialties(): void {
    this.apiService.getMostCommonSpecialties().subscribe({
      next: (data) => {
        this.specialties = data;
        console.log('Données reçues :', data);
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la récupération des données.';
        console.error('Erreur API :', error);
      }
    });
  }
}