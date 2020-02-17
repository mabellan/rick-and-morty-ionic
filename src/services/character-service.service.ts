import { Injectable } from '@angular/core';
import {ApiResponse} from '../data/response';
import {HttpClient} from '@angular/common/http';
import {Character} from '../data/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

    constructor(private http: HttpClient) {}

    getAll(page: number) {
        return this.http.get<ApiResponse<Character[]>>('https://rickandmortyapi.com/api/character/?page=' + page);
    }

    getOne(id: number) {
        return this.http.get<Character>('https://rickandmortyapi.com/api/character/' + id);
    }
}
