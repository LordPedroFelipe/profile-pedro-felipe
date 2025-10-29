import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apod } from '../models/apod.model';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private readonly apiUrl = 'https://api.nasa.gov/planetary/apod';
  private readonly apiKey = 'TUYiIhMWznmrxUwBfqSs6Ip5s0Qqie7igUVp4PSP';

  constructor(private http: HttpClient) {}

  getApodByDate(date?: string): Observable<Apod> {
    let params = new HttpParams().set('api_key', this.apiKey);
  
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      params = params.set('date', formattedDate);
    }

    return this.http.get<Apod>(this.apiUrl, { params });
  }

  getRandomApods(count: number): Observable<Apod[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('count', count.toString());

    return this.http.get<Apod[]>(this.apiUrl, { params });
  }
}
