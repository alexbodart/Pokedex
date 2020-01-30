import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatFormFieldModule} from '@angular/material';




@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class PokemonsModule { }
