import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DistributionSummaryComponent } from './distribution-summary/distribution-summary.component';
import { DistributionInfoComponent } from './distribution-info/distribution-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DistributionSummaryComponent,
    DistributionInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
