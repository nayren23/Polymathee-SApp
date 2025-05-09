import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Assurez-vous que le chemin d'importation est correct
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChartData } from 'chart.js';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-organismes-gestion',
  standalone: true,
  imports: [CommonModule, TableModule, MessageModule, DropdownModule, FormsModule, ButtonModule, ChartModule],
  templateUrl: './organismes-gestion.component.html',
  styleUrls: ['./organismes-gestion.component.css']
})
export class OrganismesGestionComponent implements OnInit {
  organismesGestionData: any[] = [];
  barChartData: ChartData | undefined;
  loading: boolean = true;
  annees: string[] = ['2023-2024', '2024-2025', '2025-2026']; // Années récupérées de la base de données
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

  fetchOrganismesGestion() {
    if (!this.selectedAnnee) return;

    this.apiService.getOrganismesGestion(this.selectedAnnee).subscribe({
      next: (data) => {
        this.organismesGestionData = data;
        console.log('Données Organismes de Gestion:', this.organismesGestionData);

        if (this.organismesGestionData.length <= 0) {
          this.noData = true;
          console.warn("Aucune donnée disponible.");
        } else {
          this.noData = false;

          // Préparation des données pour le graphique
          this.barChartData = {
            labels: data.map(item => item.libelle_og),
            datasets: [
              {
                label: 'Nombre d\'établissements affiliés',
                data: data.map(item => item.nombre_etablissements_affilies),
                backgroundColor: 'rgba(0, 123, 255, 0.6)',  // Couleur de fond des barres
                borderColor: 'rgba(0, 123, 255, 1)',      // Bordure des barres
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