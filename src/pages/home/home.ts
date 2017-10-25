import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PokedexProvider } from '../../providers/pokedex/pokedex';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	pokemons:any[];
	pokemonId : number;
  errorMessage: string;
  constructor(private modal: ModalController, public navCtrl: NavController, public pokedexProvider: PokedexProvider) {
  	this.pokemonId = 1;
    this.pokemons=[];
  }
  ionViewDidLoad(){
    this.getPokemon();
  }

  getPokemon(){
  	this.pokedexProvider.getPokemon(this.pokemonId)
  	.subscribe(
      pokemon => this.pokemons.push(pokemon),
      error => this.errorMessage = <any>error
    );
    console.log("oi");
    this.pokemonId++;
  }

  getPokemons(){
  console.log(this.pokemons);
  }

  openModal(Pokemon){
    const MyModal = this.modal.create('ModalPage', {Pokemon: Pokemon});
    MyModal.present();
  }

}
