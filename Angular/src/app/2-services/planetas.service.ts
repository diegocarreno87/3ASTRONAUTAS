import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';     
import { HttpClient } from '@angular/common/http';
import { PlanetasRestUrl } from './../3-common/config'

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  functionToInvoke = new EventEmitter();  
  subsVar: Subscription;   

  constructor(
    private http: HttpClient
  ) { }

  StartCountDown() {    
    this.functionToInvoke.emit(); 
  } 

  getPlanetas() {
    return this.http.get(PlanetasRestUrl);
  }

}
