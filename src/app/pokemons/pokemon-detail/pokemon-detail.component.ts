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
    this.getPokemon();
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  playAudio() {
    // @ts-ignore
    this.audio = new Audio();
    const id = +this.route.snapshot.paramMap.get('id');
    this.audio.src = '../../../assets/audio/' + id + '.mp3';
    this.audio.load();
    this.audio.play();
  }
}
