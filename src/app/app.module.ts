import { FindPkmComponent } from './components/findPkm/findPkm.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingProviders, routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindPkmComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
