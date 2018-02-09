import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfService {
  public conf = {};
  constructor(private http: Http) { }

  
  getConfigs() {
    /* This is a description */
    this.http.get('configs.json')
      .pipe(
        map((res:Response) => res.json())
      ).subscribe(conf => {
        this.conf = conf;
      });
  }
}
