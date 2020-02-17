import {Component, OnInit} from '@angular/core';
import {Episode} from '../../data/episode';
import {EpisodeService} from '../../services/episode.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
    slideOpts: any;
    episodes: Episode[];
    private page: number = 1;
    loading: boolean;

    constructor(private episodeService: EpisodeService) {}

    ngOnInit(): void {
        this.loading = true;
        this.episodeService.getAll(this.page).subscribe(episodes => {
            this.loading = false;
           this.episodes = episodes.results;
        });
    }

}
