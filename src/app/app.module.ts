import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PromiseVsObsComponent } from './promise-vs-obs/promise-vs-obs.component';
import { ObsComponent } from './obs/obs.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseVsObsComponent,
    ObsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
