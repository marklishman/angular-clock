import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { ClockComponent } from './clock/clock.component';
import { StopwatchComponent } from './clock/stopwatch.component';

const routes: Routes = [
  {path: '', redirectTo: '/clock', pathMatch: 'full'},
  {path: 'clock', component: ClockComponent},
  {path: 'stopwatch', component: StopwatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppRoutingModule {
}
