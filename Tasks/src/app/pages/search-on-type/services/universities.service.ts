import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universities } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  private _univEndPorint: string = 'http://localhost:3000/universities'; 

  constructor( private http: HttpClient ) { }

  // methods
  searchUniversities(countryCode: string, center: string): Observable<Universities[]> {
    return this.http.get<Universities[]>(`${this._univEndPorint}?alpha_two_code=${countryCode}&q=${center}`);
  }
}
