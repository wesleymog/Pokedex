import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  pokemon:any[];
  fotospokemon:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.pokemon = [];
    this.fotospokemon = [];
  }
  ionViewDidLoad() {
    const pk=this.navParams.get('Pokemon');
    this.pokemon = pk;
    this.fotospokemon = pk.sprites;
    console.log(pk);
  }
  closeModal(){
    this.view.dismiss();
    }

}
