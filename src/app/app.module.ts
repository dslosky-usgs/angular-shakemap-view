import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LayerService } from './map/layers/layer.service';
import { EventsComponent } from './events/events.component';
import { EventService } from './events/event.service';
import { MapService } from './map/map.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [LayerService, EventService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
