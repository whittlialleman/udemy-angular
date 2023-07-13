import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'}) //alternative to putting this in the providers array in app.module
export class DataStorageService implements {
    constructor(private http: HttpClient) {

    }
}