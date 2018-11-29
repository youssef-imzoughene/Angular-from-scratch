import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
//import { POKEMONS } from './mock-pokemons';
import { PokemonsService } from './pokemons.service';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './app/pokemons/detail-pokemon.component.html',
	providers:[PokemonsService]
})
export class DetailPokemonComponent implements OnInit {

	//pokemons: Pokemon[] = null;
	pokemon: Pokemon = null;

	constructor(private route: ActivatedRoute, private router: Router,private pokemonsService : PokemonsService) {}

	ngOnInit(): void {
		//this.pokemons = POKEMONS;

		let id = +this.route.snapshot.paramMap.get('id');
		/*for (let i = 0; i < this.pokemons.length; i++) {
			if (this.pokemons[i].id == id) {
				this.pokemon = this.pokemons[i];
			}
		}*/
		this.pokemon = this.pokemonsService.getPokemon(id);
	}

	goBack(): void {
		this.router.navigate(['/pokemons']);
	}

}