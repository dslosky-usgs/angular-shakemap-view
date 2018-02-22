import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs/ReplaySubject'; 

@Injectable()
export class StationService {
  public hasData: boolean = false;
  public data:any = new ReplaySubject(1)

  constructor(private http: HttpClient) { }

  getInfo(event) {
    let contents = event['shakemap'][0]['contents'];
    if (contents['download/info.json']) {
      this.http.get(contents['download/stationlist.json']['url'])
        .subscribe(data => {
          this.data.next(data);
          this.hasData = true;
        })
    } else {
      this.data.next(null);
      this.hasData = false;
    }
  }

}
