import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Assurez-vous que le chemin d'importation est correct
import { CommonModule } from '@angular/common'; // Importez CommonModule si vous utilisez des directives comme *ngIf, *ngFor
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ChartModule } from 'primeng/chart';
import { ChartData, ChartOptions } from 'chart.js'; // Import ChartData pour la structure des données
@Component({
  selector: 'app-most-common-specialties',
  standalone: true,
  imports: [CommonModule, TableModule, IconFieldModule, InputIconModule, ChartModule],
  templateUrl: './most-common-specialties.component.html',
  styleUrl: './most-common-specialties.component.css'
})
export class MostCommonSpecialtiesComponent implements OnInit {
  specialties: any[] = [];
  errorMessage: string = '';

  loading = true;
  // Données pour le graphique Doughnut
  data: ChartData = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      }
    ]
  };

  // Options du graphique
  options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff'  // Couleur blanche
        }
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          }
        }
      }
    }
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadSpecialties();
  }

  loadSpecialties(): void {
    this.apiService.getMostCommonSpecialties().subscribe({
      next: (data) => {
        this.specialties = data;
        this.updateChartData();
        console.log('Données reçues :', data);
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la récupération des données.';
        console.error('Erreur API :', error);
        this.loading = false;
      }
    });
  }

  /**
   * Mise à jour des données du graphique
   */
  updateChartData(): void {
    // Préparer les labels et les données pour le graphique
    const labels = this.specialties.map(specialtie => specialtie.libelle_specialite);
    const dataValues = this.specialties.map(specialtie => specialtie.nombre_formations);

    this.data = {
      labels: labels,
      datasets: [{
        data: dataValues,
        backgroundColor: ['#42A5F5', '#66BB6A', '#FF7043', '#FFEB3B', '#8E24AA']
      }]
    };
  }
}