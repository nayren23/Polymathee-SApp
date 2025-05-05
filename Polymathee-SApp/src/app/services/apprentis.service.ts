import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Apprenti {
  id: number;
  nom: string;
  prenom: string;
  // ... autres propriétés
}

@Injectable({
  providedIn: 'root'
})
export class ApprentisService {
  private apiUrl = 'http://127.0.0.1:5000'; // Remplace par l'URL de ton API Flask

  constructor(private http: HttpClient) { }

  getApprentis(): Observable<Apprenti[]> {
    return this.http.get<Apprenti[]>(this.apiUrl);
  }
}