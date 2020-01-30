import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Pokemon} from '../models/pokemon.model';
import {PagedData} from '../models/paged-data.model';
import {catchError, tap} from 'rxjs/operators';
import {Token} from '../models/token';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const token = localStorage.getItem('token');
const httpOptionsBearer = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': token
  })
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
    return this.id;
  }

  getTeam(): Observable<number[]> {
    console.log(token);
    return this.http.get<number[]>(this.apiUrl + `/trainers/me/team`, httpOptionsBearer);
  }

  searchPokemon(term: string): Observable<PagedData<Pokemon>> {
    if (!term.trim()) {
      return this.getPokemons(0, 20);
    }
    return this.http.get<PagedData<Pokemon>>(this.apiUrl + `/pokemons?search=${term}`);
  }

  connexion(identifiants): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + `/auth/login`, identifiants).pipe(tap(_ => this.log(`logs : "${identifiants}"`)));
  }

  private log(s: string) {
    console.log(s);
  }
}
