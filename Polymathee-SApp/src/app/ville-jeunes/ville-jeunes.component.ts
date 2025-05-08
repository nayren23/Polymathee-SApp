import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-ville-jeunes',
  standalone: true,
  imports: [CommonModule, ChartModule, TableModule, FormsModule, TagModule, DropdownModule, ButtonModule, MessageModule],
  templateUrl: './ville-jeunes.component.html',
  styleUrl: './ville-jeunes.component.css'
})

export class VilleJeunesComponent implements OnInit {
  diplomes: string[] = [];
  selectedDiplome: string = '';
  selectedAnnee: string = '';
  annees: string[] = ['2023-2024', '2024-2025', '2025-2026']; // Faudra les récupérer dans la bdd.
  villesData: any[] = [];
  radarChartData: any;
  loading = false;
  noData: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDiplomas()
  }

  getDiplomas(): void {
    this.apiService.getDiplomas().subscribe({
      next: (data) => {
        //this.diplomes = data;
        this.diplomes = data.map((diplomeObj: { diplome: string }) => diplomeObj.diplome);
      },
      error: (error) => {
        console.error('Erreur API:', error)
      }
    });
  }

  envoyer(): void {
    if (!this.selectedDiplome || !this.selectedAnnee) return;

    this.loading = true;
    console.log("selectedDiplome" + this.selectedDiplome)
    console.log("selectedAnnee" + this.selectedAnnee)

    this.apiService.getVillesByDiplomeEtAnnee(this.selectedDiplome, this.selectedAnnee).subscribe({
      next: (data) => {
        this.villesData = data;
        console.log('Données reçues de l\'API villesData:', this.villesData)
        if (this.villesData.length === 0) {
          this.noData = true;
        }
        else {
          this.noData = false;
          this.radarChartData = {
            labels: data.map(d => d.ville),
            datasets: [
              {
                label: 'Nombre de jeunes',
                data: data.map(d => d.nombre_jeunes),
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderColor: 'rgba(54, 162, 235, 1)'
              }
            ]
          };
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur API:', error)
      }

    });
  }
}