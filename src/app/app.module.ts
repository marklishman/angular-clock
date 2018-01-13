import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { AppRoutingModule } from './app-routing.module';
import { StopwatchComponent } from './clock/stopwatch.component';
import { StopwatchLiteComponent } from './clock/stopwatch-lite.component';
import { StopwatchLiteParentComponent } from './clock/stopwatch-lite-parent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    StopwatchComponent,
    StopwatchLiteComponent,
    StopwatchLiteParentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
