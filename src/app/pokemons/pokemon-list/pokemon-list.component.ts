import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../models/pokemon.model';
import {PokemonService} from '../services/pokemon.service';
import {PagedData} from '../models/paged-data.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  private offset = 0;
  private limit = 20;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons(this.offset, this.limit)
      .subscribe(res => this.pokemons = res.data);
  }

  onScrollDown() {
    this.limit += 10;
    this.getPokemons();
  }

  choose(id: number) {
    this.pokemonService.setPokemonId(id);
  }

  search(term: string): void {
    this.pokemonService.searchPokemon(term).subscribe(res => this.pokemons = res.data);
  }
}
