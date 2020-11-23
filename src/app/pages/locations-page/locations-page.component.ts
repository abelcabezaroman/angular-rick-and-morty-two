import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {

  locationsList = [];

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    // fetch('https://rickandmortyapi.com/api/Location/')
    // .then(res => res.json()).then(res => console.log(res))

    // this.http.get('https://rickandmortyapi.com/api/Location/').subscribe(
    //   res => console.log(res)
    // );
  
    this.locationsService.getLocations().subscribe(
      (res: any) => {
        this.locationsList = res.results;
      }
    );
  }
}
