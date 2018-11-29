import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { PokemonsModule } from './pokemons/pokemons.module';

import { InMemoryDataService } from './in-memory-data.service';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
//import { ListPokemonComponent }  from './pokemons/list-pokemon.component';
//import { DetailPokemonComponent }  from './pokemons/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';

//import { BorderCardDirective }  from './pokemons/border-card.directive';

//import { PokemonTypeColorPipe} from './pokemons/pokemon-type-color.pipe'

@NgModule({
  imports:      [ BrowserModule ,
                  HttpClientModule,
                  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
                  PokemonsModule,
                  AppRoutingModule,
                 
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