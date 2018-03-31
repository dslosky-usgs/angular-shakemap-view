import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatIconModule,
    MatCardModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { HttpHostNameInterceptor } from './http-interceptor';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LayerService } from './map/layers/layer.service';
import { EventsComponent } from './events/events.component';
import { EventService } from './events/event.service';
import { MapService } from './map/map.service';
import { ConfService } from './conf.service';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
//import { InfoComponent } from './bottom-panel/info/info.component';
//import { InfoService } from './bottom-panel/info/info.service';
//import { StationListComponent } from './bottom-panel/station-list/station-list.component';
//import { StationService } from './bottom-panel/station-list/station.service';
import { MapControlComponent } from './map/map-control/map-control.component';
import { MapControlService } from './map/map-control/map-control.service';

import { EventpagesModule } from 'earthquake-eventpages';
import { ShakemapModule } from 'earthquake-eventpages';

import { HeaderComponent } from './header/header.component';
import { EventFilterComponent } from './events/event-filter/event-filter.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventComponent } from './events/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EventsComponent,
    BottomPanelComponent,
    MapControlComponent,
    HeaderComponent,
    EventFilterComponent,
    EventListComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    EventpagesModule.forRoot(),
    ShakemapModule
  ],
  providers: [LayerService,
                EventService,
                MapService,
                ConfService,
                MapControlService
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
