import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Assurez-vous que le chemin d'importation est correct
import { CommonModule } from '@angular/common'; // Importez CommonModule si vous utilisez des directives comme *ngIf, *ngFor
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ChartModule } from 'primeng/chart';
import { ChartData, ChartOptions } from 'chart.js'; // Import ChartData pour la structure des données
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-duree-formation',
  standalone: true,
  imports: [CommonModule, TableModule, IconFieldModule, InputIconModule, ChartModule, MessageModule, DropdownModule, FormsModule, ButtonModule],
  templateUrl: './duree-formation.component.html',
  styleUrl: './duree-formation.component.css'
})

export class DureeFormationComponent implements OnInit {
  dureeFormationData: any[] = [];
  radarChartData: ChartData | undefined;
  loading: boolean = true;
  annees: string[] = ['2023-2024', '2024-2025', '2025-2026']; // Faudra les récupérer dans la bdd.
  selectedAnnee: string = '';
  noData = false

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  fetchDureeFormation() {
    if (!this.selectedAnnee) return;

    this.apiService.getDureeFormation(this.selectedAnnee).subscribe({
      next: (data) => {
        this.dureeFormationData = data;
        console.log('Affichage API:', this.dureeFormationData)

        if (this.dureeFormationData.length <= 0) {
          this.noData = true
          console.warn("Attention y a rien la")
        }
        else {
          this.noData = false
          this.radarChartData = {
            labels: data.map(item => item.type_diplome),
            datasets: [
              {
                label: 'Durée moyenne des formations (mois)',
                data: data.map(item => item.duree_moyenne_mois),
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
              }
            ]
          }
          this.loading = false;
        }
      },
      error: (error) => {
        console.error('Erreur API:', error)
        this.loading = false;
      }
    }
    )
  }
}