import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}pokemon?limit=150`);
  }

  getPokemonDetails(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}pokemon/${name}`);
  }

  getPokemonSpecies(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}pokemon-species/${name}`);
  }
}
