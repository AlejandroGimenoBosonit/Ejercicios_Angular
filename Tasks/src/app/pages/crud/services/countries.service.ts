import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryName } from '../interfaces/interfaces';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  // API endpoint
  private _apiUrl: string = environment.countryEndPoint;

  // We want to make http requests
  constructor( private http: HttpClient ) { }

  // We only need countie's names, for this we're going to filter the API results
  get httpParams() {
    return new HttpParams().set('fields', 'name');
  }

  // methods
  searchCountries():Observable<CountryName[]> {
    const urlQuery: string = `${this._apiUrl}/all`;
    // request
    return this.http.get<CountryName[]>( urlQuery, {params: this.httpParams});
  }

  
}