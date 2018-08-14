import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JDRRoutingModule } from './pages/jdr.router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JDRRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
