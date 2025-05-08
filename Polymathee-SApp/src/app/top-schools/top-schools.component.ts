import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-top-schools',
  standalone: true,
  imports: [CommonModule, ChartModule, TableModule, FormsModule, TagModule],
  templateUrl: './top-schools.component.html',
  styleUrls: ['./top-schools.component.css']
})
export class TopSchoolsComponent implements OnInit {
  data: any[] = [];
  chartData: any;
  chartOptions: any;
  loading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTopSchoolsByDiplomas().subscribe({
      next: (res) => {
        console.log(res)
        this.data = res;
        this.setupChart();
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur API:', err);
        this.loading = false;
      },
    });
  }

  setupChart(): void {
    this.chartData = {
      labels: this.data.map((item) => item.etablissement),
      datasets: [
        {
          label: 'Nombre de diplômes différents',
          data: this.data.map((item) => item.nombre_diplomes_differents),
          backgroundColor: '#42A5F5',
        },
      ],
    };

    this.chartOptions = {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#fff',
          },
        },
      },
      scales: {
        x: {
          ticks: { color: '#fff' },
        },
        y: {
          ticks: { color: '#fff' },
        },
      },
    };
  }
}