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
    // console.log('Hello WishListProvider Provider');
    let lista1 = new List('Compra de supermercado');
    let lista2 = new List('Juegos que deseo');
    let lista3 = new List('Cosas del trabajo');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);
  }

}
