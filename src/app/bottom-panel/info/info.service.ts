import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs/replaysubject';

@Injectable()
export class InfoService {
  public info = new ReplaySubject(1);
  public hasInfo: boolean = false;

  constructor(private http: HttpClient) { }

  getInfo(event) {
    let contents = event['shakemap'][0]['contents'];
    if (contents['download/info.json']) {
      this.http.get(contents['download/info.json']['url'])
        .subscribe(info => {
          this.info.next(info);
          this.hasInfo = true;
        })
    } else {
      this.info.next(null);
      this.hasInfo = false;
    }
  }
}
