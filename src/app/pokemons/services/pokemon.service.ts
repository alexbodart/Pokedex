import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Pokemon} from '../models/pokemon.model';
import {PagedData} from '../models/paged-data.model';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';
  private id: number;
  constructor(private http: HttpClient) { }

  getPokemons(offset, limit): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(this.apiUrl + '/pokemons?offset=' + offset + '&limit=' + limit, httpOptions);
  }
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemons/${id}`;
    return this.http.get<Pokemon>(url);
  }

  setPokemonId(id: number) {
    this.id = id;
  }

  getPokemonId() {
    console.log(this.id);
    return this.id;
  }

  searchPokemon(term: string): Observable<PagedData<Pokemon>> {
    if (!term.trim()) {
      return this.getPokemons(0, 20);
    }
    return this.http.get<PagedData<Pokemon>>(this.apiUrl + `/pokemons?search=${term}`);
  }
}
