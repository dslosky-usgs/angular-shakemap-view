import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LayerService } from './map/layers/layer.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [LayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
