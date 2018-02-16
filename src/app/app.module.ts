import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LayerService } from './map/layers/layer.service';
import { EventsComponent } from './events/events.component';
import { EventService } from './events/event.service';
import { MapService } from './map/map.service';
import { ConfService } from './conf.service';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EventsComponent,
    BottomPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [LayerService, EventService, MapService, ConfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
