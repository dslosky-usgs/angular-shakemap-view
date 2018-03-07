import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Config {
      "defaultLayers": string[],
      "display": string
};

@Injectable()
export class ConfService {
  public conf: Config = {} as any;

  constructor(private http: HttpClient) { }

  
  getConfigs() {
    /* This is a description */
    this.http.get('configs.json')
      .subscribe((conf: Config) => {
        this.conf = conf;
      });
  }
}

