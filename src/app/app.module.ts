import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LayerService } from './map/layers/layer.service';
import { EventsComponent } from './events/events.component';
import { EventService } from './events/event.service';
import { MapService } from './map/map.service';
import { ConfService } from './conf.service';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { InfoComponent } from './bottom-panel/info/info.component';
import { InfoService } from './bottom-panel/info/info.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EventsComponent,
    BottomPanelComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [LayerService, EventService, MapService, ConfService, InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
