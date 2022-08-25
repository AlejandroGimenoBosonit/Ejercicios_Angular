import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universities } from '../interfaces/interfaces';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  private _univEndPorint: string = environment.jsonServerEndPoint; 

  constructor( private http: HttpClient ) { }

  // methods
  searchUniversities(countryCode: string, center: string): Observable<Universities[]> {
    return this.http.get<Universities[]>(`${this._univEndPorint}/universities?alpha_two_code=${countryCode}&q=${center}`);
  }
}
