import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PokedexProvider } from '../../providers/pokedex/pokedex';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	pokemons:any[];
	pokemonId : number;
  errorMessage: string;
  constructor(public navCtrl: NavController, public pokedexProvider: PokedexProvider) {
  	this.pokemonId = 1;
    this.pokemons=[];
  }
  ionViewDidLoad(){
    this.getPokemon();
  }

  getPokemon(){
    console.log('oi');
  	this.pokedexProvider.getPokemon(this.pokemonId)
  	.subscribe(
      pokemon => this.pokemons.push(pokemon),
      error => this.errorMessage = <any>error
    );
    this.pokemonId++;
  }
  getPokemons(){
    console.log(this.pokemons);
  }

}
