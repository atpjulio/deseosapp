import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WishListProvider} from "../../providers/wish-list/wish-list";
import {DetailPage} from "../detail/detail";

/**
 * Generated class for the FinishedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finished',
  templateUrl: 'finished.html',
})
export class FinishedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public wishList: WishListProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishedPage');
  }
  listDetail(list, index: number) {
    this.navCtrl.push(DetailPage, { list, index });
  }

}
