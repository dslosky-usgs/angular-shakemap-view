import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class MapService {
  public plotEvent = new ReplaySubject(1);
  constructor() { }

}
