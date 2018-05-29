import {Item} from "./item";

export class List {
  name: string;
  finished: boolean;
  items: Item[];

  constructor(nombre: string) {
    this.name = nombre;
    this.finished = false;
  }
}
