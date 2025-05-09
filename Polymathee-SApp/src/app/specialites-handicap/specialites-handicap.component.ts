import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-specialites-handicap',
  standalone: true,
  imports: [CommonModule, TableModule, MessageModule, DropdownModule, FormsModule, ButtonModule, ChartModule],
  templateUrl: './specialites-handicap.component.html',
  styleUrls: ['./specialites-handicap.component.css']
})
export class SpecialitesHandicapComponent implements OnInit {
  specialitesHandicapData: any[] = [];
  radarChartData: ChartData | undefined;
  loading: boolean = true;
  annees: string[] = [];
  selectedAnnee: string = '';
  noData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAnnee()
  }

  getAnnee(): void {
    this.apiService.getAnneScolaire().subscribe({
      next: (data) => {
        this.annees = data.map((anneesObj: { annee: string }) => anneesObj.annee)
      },
      error: (error) => {
        console.error('Erreur API:', error)
      }
    });
  }

  fetchSpecialitesHandicap() {
    if (!this.selectedAnnee) return;

    this.apiService.getSpecialitesHandicap(this.selectedAnnee).subscribe({
      next: (data) => {
        this.specialitesHandicapData = data;
        console.log('Données Spécialités Handicap:', this.specialitesHandicapData);

        if (this.specialitesHandicapData.length <= 0) {
          this.noData = true;
          console.warn("Aucune donnée disponible.");
        } else {
          this.noData = false;

          // Préparation des données pour le graphique radar
          this.radarChartData = {
            labels: data.map(item => item.libelle_specialite), // Libellé des spécialités
            datasets: [
              {
                label: 'Pourcentage de jeunes en situation de handicap (%)',
                data: data.map(item => item.pourcentage_handicap), // Proportion du handicap
                backgroundColor: 'rgba(0, 123, 255, 0.2)', // Couleur de fond
                borderColor: 'rgba(0, 123, 255, 1)', // Couleur des bords
                borderWidth: 1
              }
            ]
          };
        }

        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur API:', error);
        this.loading = false;
      }
    });
  }
}
