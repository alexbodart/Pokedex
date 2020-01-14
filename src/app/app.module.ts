import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import {
  MAT_CHIPS_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import {FormsModule} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    InfiniteScrollModule
  ],
  providers: [{
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
