import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WishListProvider} from "../../providers/wish-list/wish-list";
import {AddPage} from "../add/add";

/**
 * Generated class for the PendingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendings',
  templateUrl: 'pendings.html',
})
export class PendingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public wishList: WishListProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingsPage');
  }

  addList() {
    this.navCtrl.push(AddPage);
  }
}
