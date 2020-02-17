import {Component, OnInit} from '@angular/core';
import {LocationService} from '../../services/location.service';
import {Location} from '../../data/location';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
    places: Location[];
    loading: boolean;

    constructor(private locationService: LocationService) {}

    ngOnInit(): void {
        this.loading = true;
        this.locationService.getAll().subscribe(locations => {
            this.loading = false;
            this.places = locations.results;
        });
    }

}
