import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private api_url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any[]>{
    const endpoint = `${this.api_url}/pokemon?limit=100000`;
    return this.http.get<any[]>(endpoint); 
  }

  getPokemonById(url: string): Observable<any>{
    return this.http.get<any>(url);
  }
}
