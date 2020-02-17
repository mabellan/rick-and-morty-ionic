import {Component, OnInit, ViewChild} from '@angular/core';
import {CharacterServiceService} from '../../services/character-service.service';
import {Character} from '../../data/character';
import {Router} from '@angular/router';
import {DataSharingService} from '../../services/data-sharing.service';
import {IonContent} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonContent, null) ionContent: IonContent;
  public characters: Character[];
  loading: boolean;
  private page: number = 1;
  private nextPage: string;
  private previousPage: string;

  constructor(private characterService: CharacterServiceService,
              private router: Router,
              private dataSharing: DataSharingService) {}

  ngOnInit(): void {
    this.loading = true;
    this.getCharacters();
  }

  private getCharacters() {
    this.characterService.getAll(this.page).subscribe(characters => {
      this.loading = false;
      this.characters = characters.results;
      this.nextPage = characters.info.next;
      this.previousPage = characters.info.prev;
    });
  }

  onClickCharacter(character: Character) {
    this.dataSharing.setCharacterData(character);
    this.router.navigate([`/character/${character.id}`]);
  }

  onClickNextPage() {
    this.page++;
    this.ionContent.scrollToTop(1000);
    this.getCharacters();
  }

  hasNextPage() {
    return this.nextPage != null && this.nextPage !== '';
  }

  hasPreviousPage() {
    return this.previousPage != null && this.previousPage !== '';
  }

  onClickPreviousPage() {
    this.page--;
    this.ionContent.scrollToTop(1000);
    this.getCharacters();
  }
}
