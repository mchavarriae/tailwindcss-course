import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  items: Array<any> = [];

  async ngOnInit() {
    const result = await fetch(`https://bechdel.azurewebsites.net/api/films`);
    const json = await result.json();
    this.items.push(...json.results);
  }

}
