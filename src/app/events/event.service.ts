import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getEventFeed() {
    return this.http.get('products.json')
      .pipe(
        map((res:Response) => res.json())
      );
  }

}
