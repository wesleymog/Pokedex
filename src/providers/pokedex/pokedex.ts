import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the PokedexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokedexProvider {

	pokemonApiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(public http: Http) {
    console.log('Hello PokedexProvider Provider');
  }
	getPokemon(id: number): Observable<any>{
   	return this.http.get(this.pokemonApiUrl + id)
   		.map(res => res.json())
   		.catch(this.handleError);
   }
  private HandleError(error: any): Observable<any>{
  	console.log('Deu merda');
  	return Observable.throw(error.message || error);
  }

}
