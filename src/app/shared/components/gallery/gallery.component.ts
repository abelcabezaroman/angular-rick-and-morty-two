import { Component, Input, OnInit } from '@angular/core';
import { FavoritesLocalService } from '../../services/local/favorites-local.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() galleryList;

  constructor(private favoritesLocalService: FavoritesLocalService) { }

  ngOnInit(): void {
  }

  addToFavorites(item){
    this.favoritesLocalService.addFavorite(item)
  }

}
