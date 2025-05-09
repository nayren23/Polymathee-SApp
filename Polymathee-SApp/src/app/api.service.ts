import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Pour gérer les réponses asynchrones

@Injectable({
  providedIn: 'root', // Le service sera singleton dans toute l'application
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5050'; // L'URL de votre API Flask

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns Json
   */
  getMostCommonSpecialties(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/apprentis/most-common-specialties`); // Adaptez l'endpoint de votre API
  }


  getTopSchoolsByDiplomas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/apprentis/top-schools-by-diplomas`);
  }

  getDiplomas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/apprentis/diplomes`);
  }

  getVillesByDiplomeEtAnnee(diplome: string, annee: string): Observable<any[]> {
    const params = { diplome, annee };
    const url = `${this.apiUrl}/apprentis/ville-jeunes`;
    return this.http.get<any[]>(url, { params });
  }

  getDureeFormation(annee: string): Observable<any[]> {
    const params = { annee };
    const url = `${this.apiUrl}/apprentis/duree-formation`;
    return this.http.get<any[]>(url, { params });
  }

  getOrganismesGestion(annee: string): Observable<any[]> {
    const params = { annee };
    const url = `${this.apiUrl}/apprentis/organismes-gestion`;
    return this.http.get<any[]>(url, { params });
  }
  getSpecialitesHandicap(annee: string): Observable<any[]> {
    const params = { annee };
    const url = `${this.apiUrl}/apprentis/specialites-handicap`;
    return this.http.get<any[]>(url, { params });
  }

  getAnneScolaire(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/apprentis/annee-scolaire`);
  }
}