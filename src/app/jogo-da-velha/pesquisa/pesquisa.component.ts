import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  @Input() personagens: any;
  @Output() personagen: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.personagens);
  }

  getPersonagen(personagen: any) {
    this.personagen = personagen
    console.log(personagen);
  }
}
