import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EntertainmentData } from '../interface/media';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MediaService {

  // Mock API Created with 'https://mockapi.io/'
  private _apiUrl = 'https://6377827a81a568fc2517bcac.mockapi.io/api/media';

  constructor(private http: HttpClient) {}

  // Gets Media API data
  getMedia(): Observable<EntertainmentData[]> {
    return this.http.get<EntertainmentData[]>(this._apiUrl);
  }

  // Search Endpoint 
  searchMedia(query: string): Observable<EntertainmentData[]> {
    const params = new HttpParams().set('search', query);
    return this.http.get<EntertainmentData[]>(`${this._apiUrl}/?`, {params});
  } 

  // Toggles Media data 'isBookmarked'
  saveMedia(media: EntertainmentData): Observable<EntertainmentData> {
    const url = `${this._apiUrl}/${media.id}`;
    media.isBookmarked ? media.isBookmarked = false : media.isBookmarked = true;
    return this.http.put<EntertainmentData>(url, media);
  }

}
