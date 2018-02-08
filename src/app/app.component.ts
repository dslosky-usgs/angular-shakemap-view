import { Component, OnInit } from '@angular/core';
import { ConfService } from './conf.service';
@Component({
  selector: 'shakemap-view-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shakemap-view';

  constructor(private c: ConfService) { }

  ngOnInit() {
    this.c.getConfigs();
  }
}
