import { Component, Input } from '@angular/core';
import {DistributionSummaryEntry} from "../../lib/dice3"

@Component({
  selector: 'app-distribution-summary',
  templateUrl: './distribution-summary.component.html',
  styleUrls: ['./distribution-summary.component.css']
})
export class DistributionSummaryComponent {

  @Input()
  public summaryEntry: DistributionSummaryEntry

}
