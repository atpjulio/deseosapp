import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {List} from "../../classes/list";
import {Item} from "../../classes/item";
import {WishListProvider} from "../../providers/wish-list/wish-list";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  list: List;
  idx: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public wishList: WishListProvider, public alertCtrl: AlertController) {
    // console.log(this.navParams);
    this.idx = this.navParams.data.index;
    this.list = this.navParams.data.list;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  updateList() {
    this.wishList.updateList();
  }

  updateItem(item: Item) {
    item.completed = !item.completed;

    let allCompleted = true;

    for (let itemList of this.list.items) {
      if (!itemList.completed) {
        allCompleted = false;
        break;
      }
    }
    this.list.finished = allCompleted;

    this.wishList.updateList();
  }

  deleteList() {
    let confirm = this.alertCtrl.create({
      title: this.list.name,
      message: 'Estás seguro(a) de borrar esta lista?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Se presionó la opción No');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.wishList.deleteList(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
