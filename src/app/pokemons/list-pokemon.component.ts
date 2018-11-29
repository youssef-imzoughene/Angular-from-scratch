import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'list-pokemon',
  //template: `<h1>Hello youssef {{name}}</h1>`,
  templateUrl:"./app/pokemons/list-pokemon.component.html"
})
export class ListPokemonComponent implements OnInit  { 
  
  //name = 'Angular';

  private pokemons:Pokemon[]=null; 

  constructor(private router:Router){}


  title:string = "Liste des pokémons"
  //value:string =''
  //values:string =''
  beta:Number=900;

  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon:Pokemon){
    //alert("Vous avez cliqué sur "+pokemon.name);
    let link = ['/pokemon',pokemon.id];
    this.router.navigate(link);
  }

  /*
  onkey(value:string){
    this.value='bonjour '+value
  }
  */
}