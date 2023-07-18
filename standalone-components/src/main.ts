import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AnalyticsService } from './app/shared/analytics.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: []//[AnalyticsService] //Equivalient to providers in an NgModule
});
