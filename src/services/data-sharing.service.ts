import {EventEmitter, Injectable} from '@angular/core';
import {Character} from '../data/character';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private characterData = new EventEmitter<Character>();

  constructor() { }

  getCharacterObservable() {
    return this.characterData.asObservable();
  }
  setCharacterData(character: Character) {
    this.characterData.next(character);
  }
}
