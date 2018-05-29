import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Item} from "../../classes/item";
import {WishListProvider} from "../../providers/wish-list/wish-list";
import {List} from "../../classes/list";

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  nombreLista = '';
  nombreItem = '';
  items: Item[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public wishList: WishListProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  addItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    let item = new Item();
    item.name = this.nombreItem;
    this.items.push(item);
    this.nombreItem = '';
  }

  deleteItem(index:number) {
    // console.log(index);
    this.items.splice(index, 1);
  }

  saveList() {
    if (this.nombreLista.length === 0) {
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista no puede estar vacío',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    let lista = new List(this.nombreLista);
    lista.items = this.items;
    this.wishList.addList(lista);
    this.navCtrl.pop();
  }
}
