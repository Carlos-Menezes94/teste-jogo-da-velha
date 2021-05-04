import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  marverApiUrl = 'http://gateway.marvel.com/v1/public/characters?ts=1619977731448&apikey=d980de0210eaf8e70a4e189dad311fc2&hash=2824f0a5ca22b9f8c74e0786f5bc9a56&limit=100'

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })    
  }

  constructor(private httpClient: HttpClient) { }

  public getParsonagens()
  {
    return this.httpClient.get(this.marverApiUrl);
  }
}
