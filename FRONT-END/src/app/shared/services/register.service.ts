import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../models/Person';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiURL = environment.apiURL;
  constructor(
    private _http: HttpClient
  ) { }


  getAll() {
    return this._http.get<Person[]>(this.apiURL);
  }

  savePerson(person: Person) {
    return this._http.post(this.apiURL, person);
  }
}
