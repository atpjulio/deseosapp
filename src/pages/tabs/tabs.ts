import { Component } from '@angular/core';

import {PendingsPage} from "../pendings/pendings";
import {FinishedPage} from "../finished/finished";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingsPage;
  tab2Root = FinishedPage;

  constructor() {

  }
}
