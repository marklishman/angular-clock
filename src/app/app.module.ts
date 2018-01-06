import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { AppRoutingModule } from './app-routing.module';
import { StopwatchComponent } from './clock/stopwatch.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    StopwatchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
