import { Component, Input } from '@angular/core';
import {makeDistributionSummary, } from '../../lib/dice3'
@Component({
  selector: 'app-distribution-info',
  templateUrl: './distribution-info.component.html',
  styleUrls: ['./distribution-info.component.css']
})
export class DistributionInfoComponent {

  @Input()
  public distribution: Map<number, number>;

  public summaries() {
      return makeDistributionSummary(this.distribution)
  }
}
