import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { mmiLayer } from './cont_mmi';
import { pgaLayer } from './cont_pga';
import { epicenterLayer } from './epicenter';
import { stationLayer } from './stationlist';

var layers = [epicenterLayer, mmiLayer, pgaLayer, stationLayer];

@Injectable()
export class LayerService {
  public nextLayer = new ReplaySubject(1);

  constructor(private http: Http) {}

  genLayers(event) {
    let contents = event['shakemap'][0]['contents'];

    for (let layer of layers) {
      // check if this layers product is available
      if (layer['productId'] in contents) {
        // get the product
        this.http.get(contents[layer['productId']]['url'])
          .pipe(
            map((res:Response) => {
              if (layer.type === 'json') {
                return res.json();
              } else {
                return res.text();
              }
            })
          )
          .subscribe(product => {
            // generate the layer
            let l = {}
            l['layer'] = layer.generateLayer(product);
            l['name'] = layer.name;

            // let the map know it's ready
            this.nextLayer.next(l);
          });
      }
    }
  }

}
