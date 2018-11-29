import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { PokemonsModule } from './pokemons/pokemons.module';

import { AppComponent }  from './app.component';
//import { ListPokemonComponent }  from './pokemons/list-pokemon.component';
//import { DetailPokemonComponent }  from './pokemons/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';

//import { BorderCardDirective }  from './pokemons/border-card.directive';

//import { PokemonTypeColorPipe} from './pokemons/pokemon-type-color.pipe'

@NgModule({
  imports:      [ BrowserModule ,
                  PokemonsModule,
                  AppRoutingModule
                  
                ],
  declarations: [ AppComponent,
                  //BorderCardDirective,
                  //PokemonTypeColorPipe,
                  //ListPokemonComponent,
                  //DetailPokemonComponent,
                  PageNotFoundComponent,
                  
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }