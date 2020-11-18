import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // fetch('https://rickandmortyapi.com/api/character/')
    // .then(res => res.json()).then(res => console.log(res))
    
    this.http.get('https://rickandmortyapi.com/api/character/').subscribe(
      res => console.log(res)
    );
  
  }

}
