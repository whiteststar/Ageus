import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Persons } from './persons';
import { Observable } from 'rxjs';

const localUrl = 'http://localhost:8085/persons';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getPersons(): Observable<Persons[]> {
    return this.http.get<Persons[]>(localUrl);
  }
}
