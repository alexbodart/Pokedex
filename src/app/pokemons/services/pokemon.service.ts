import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from '../models/pokemon.model';
import {PagedData} from '../models/paged-data.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io'
  constructor(private http: HttpClient) { }

  getPokemons(offset, limit): Observable<PagedData<Pokemon[]>> {
    return this.http.get<PagedData<Pokemon[]>>(this.apiUrl + '/pokemons?offset=' + offset + '&limit=' + limit, httpOptions);
  }
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemons/${id}`;
    return this.http.get<Pokemon>(url);
  }
}
