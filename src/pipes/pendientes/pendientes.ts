import { Pipe, PipeTransform } from '@angular/core';
import {List} from "../../classes/list";

/**
 * Generated class for the PendientesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(listas: List[], completed = false) {
    //return value.toLowerCase();
    let newList: List[] = [];

    for (let lista of listas) {
      if (lista.finished == completed) {
        newList.push(lista);
      }
    }

    return newList;
  }
}
