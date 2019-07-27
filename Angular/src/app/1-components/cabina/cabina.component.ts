import { Component, OnInit } from '@angular/core';
import { PlanetasService } from './../../2-services/planetas.service';

@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.css']
})
export class CabinaComponent implements OnInit {

  countdown:Number = 10;

  constructor(
    private service: PlanetasService
  ) { }

  ngOnInit() {
    this.countdown = 10;
    if (this.service.subsVar==undefined) {    
      this.service.subsVar = this.service.
        functionToInvoke.subscribe((name:string) => {    
        this.StartCountDown();    
      });    
    } 
   }

  StartCountDown(){
    //console.log('this.countdown='+this.countdown.toString());
    this.ResetCountDown();
    //console.log('this.countdown='+this.countdown.toString());
    var timeleft:any = this.countdown;
    var downloadTimer = setInterval(function(){
      //console.log('this.timeleft='+timeleft.toString());
      this.countdown.innerHTML =  timeleft.toString();
      timeleft = timeleft - 1;
      if(timeleft < 0){
        clearInterval(downloadTimer);
      }
    }, 1000);
  }

  ResetCountDown(){
    this.countdown = 10;
  }
}
