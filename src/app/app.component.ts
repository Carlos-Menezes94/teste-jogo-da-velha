import { Component } from '@angular/core';
import { MarvelService } from './services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jogo-da-velha';

  personagens: any;
  personagen1: any;
  personagen2: any;

  constructor(
    public marvelService: MarvelService
  ){}

  ngOnInit() : void {
    this.getPersonagens()
  }

  getPersonagens() {
    this.marvelService.getParsonagens().subscribe(async data => {
      console.log(data);
      this.personagens = data
    })
  }

  getPersonagen1(personagen: any) {
    this.personagen1 = personagen
    console.log(personagen);
  }
  getPersonagen2(personagen: any) {
    this.personagen2 = personagen
    console.log(personagen);
  }
}
