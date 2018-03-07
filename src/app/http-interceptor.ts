import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { ConfService } from './conf.service';


@Injectable()
export class HttpHostNameInterceptor implements HttpInterceptor {

    constructor(private confService: ConfService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let host: string = window.location.hostname
        if (req.url.indexOf(host) > 0) {
            // we're getting data from our current host, let's remove
            // the hardcoded host name
            let split_url = req.url.split('/')
            split_url[0] = '';
            let new_url = split_url.join('/')
            var req = req.clone({url: new_url});
        }
        //const authReq = req.clone({headers: req.headers.set("headerName", "headerValue")});

        //send the newly created request
        return next.handle(req);
    }
}