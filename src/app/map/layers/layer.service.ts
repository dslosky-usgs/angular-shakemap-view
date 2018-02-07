import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { mmiLayer } from './cont_mmi';
var layers = [mmiLayer];

@Injectable()
export class LayerService {
  constructor(private http: Http) {}

  getLayers() {
    for (let layer of layers) {
      var l = {};
      l[layer.name] = layer.generateLayer();
    }
    return l;
  }

}
