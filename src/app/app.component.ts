import { Component,OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  //template: `<h1>Hello youssef {{name}}</h1>`,
  templateUrl:"./app/app.component.html"
})
export class AppComponent implements OnInit  { 
  
  name = 'Angular';

  private pokemons:Pokemon[]=null; 

  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon:Pokemon){
    alert("Vous avez cliqué sur "+pokemon.name);
  }


}