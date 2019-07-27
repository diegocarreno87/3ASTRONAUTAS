import { Component, OnInit } from '@angular/core';
//import { CabinaComponent } from './../cabina/cabina.component'
import { PlanetasService } from './../../2-services/planetas.service';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})

export class MotorComponent implements OnInit {

  //enabled:boolean = true;

  constructor(
    private service: PlanetasService  
  ) { }

  ngOnInit() {
  }

  StartCountDown(){
    //this.enabled = false;
    this.service.StartCountDown();
  }

  EnableIgnite(){
    //this.enabled = true;
  }
}
