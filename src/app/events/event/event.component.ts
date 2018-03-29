import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shakemap-view-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }
  @Input() event: any = null;

  ngOnInit() {
  }

}
