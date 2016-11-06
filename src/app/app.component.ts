import { Component } from '@angular/core';
import {makeDistributionSummary, dice3Distribution, subtractDistributions} from '../lib/dice3'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Betrayal dice calculator!'
  nPlusDice = 6
  nMinusDice = 0

  distribution(){
    return subtractDistributions(dice3Distribution(this.nPlusDice), dice3Distribution(this.nMinusDice));
  }
}
