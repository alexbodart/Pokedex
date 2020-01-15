import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../models/pokemon.model';
import {PokemonService} from '../services/pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon;
  private audio: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {}

  ngOnInit() {
    if ( this.pokemonService.getPokemonId()) {
      this.getPokemon(this.pokemonService.getPokemonId());
    }
  }

  getPokemon(pokemonId: number): void {
    this.pokemonService.getPokemon(pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  playAudio() {
    // @ts-ignore
    this.audio = new Audio();
    const id = this.pokemonService.getPokemonId();
    this.audio.src = '../../../assets/audio/' + id + '.mp3';
    this.audio.load();
    this.audio.play();
  }
}
