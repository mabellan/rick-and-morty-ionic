import { Component, OnInit } from '@angular/core';
import {Character} from '../../../data/character';
import {CharacterServiceService} from '../../../services/character-service.service';
import {ActivatedRoute} from '@angular/router';
import {Episode} from '../../../data/episode';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {

  character: Character;
  episodes: Episode[];
  loading: boolean;

  constructor(private characterService: CharacterServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    const id: number = this.route.snapshot.params.id;
    this.characterService.getOne(id).subscribe(character => {
      this.loading = false;
      this.character = character;
    });
  }

  getColorFromStatus(status: string) {
    switch (status) {
      case  'Alive' :
        return 'primary';
      case 'Dead':
        return 'warning';
      default:
        return '';
    }
  }
}
