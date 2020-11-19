import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-detail-page',
  templateUrl: './characters-detail-page.component.html',
  styleUrls: ['./characters-detail-page.component.scss']
})
export class CharactersDetailPageComponent implements OnInit {

  characterDetail: any = {};

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        const id = params.get('id');

        this.charactersService.getCharacter(id).subscribe(character => {
          this.characterDetail = character;
        })
        
    })
  }
}
