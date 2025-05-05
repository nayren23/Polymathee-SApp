import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Pour gérer les réponses asynchrones

@Injectable({
  providedIn: 'root', // Le service sera singleton dans toute l'application
})
export class ApiService {
  private apiUrl = 'https://127.0.0.1:5050'; // L'URL de votre API Flask

  constructor(private http: HttpClient) { }

  // Exemple de méthode pour récupérer des données depuis votre API
  getApprentisData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/test-db`); // Adaptez l'endpoint de votre API
  }

  // Vous pouvez ajouter d'autres méthodes pour d'autres endpoints (POST, PUT, DELETE, etc.)
}