import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Location} from '../data/location';
import {ApiResponse} from '../data/response';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ApiResponse<Location[]>>('https://rickandmortyapi.com/api/location/');
  }
}
