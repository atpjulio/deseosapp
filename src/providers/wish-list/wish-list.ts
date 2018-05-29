import { Injectable } from '@angular/core';
import {List} from "../../classes/list";

/*
  Generated class for the WishListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WishListProvider {
  listas: List[] = [];

  constructor() {
    this.getList();
  }

  updateList() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  getList() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  addList(list: List) {
    this.listas.push(list);
    this.updateList();
    // console.log('Revisar storage');
  }

  deleteList(index: number) {
    this.listas.splice(index,1);
    this.updateList();
    console.log('Revisar storage');
  }

}
