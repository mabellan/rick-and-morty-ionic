import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from '../data/response';
import {Episode} from '../data/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getAll(page: number) {
    return this.http.get<ApiResponse<Episode[]>>('https://rickandmortyapi.com/api/episode/?page=' + page);
  }
}
