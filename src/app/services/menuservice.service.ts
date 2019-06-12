import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MenuserviceService {

    baseUrl: string = 'http://localhost:8080/apiv1';
    constructor(private http: HttpClient) { }


    getCarMenuItems(): Observable<any> {
        console.log(this.http.get(this.baseUrl + '/get'));
        return this.http.get(this.baseUrl + '/get');
    }
}
