import { Component, OnInit } from '@angular/core';
import { PlanetasService } from './../../2-services/planetas.service'
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css']
})
export class FuselajeComponent implements OnInit {

  X:string = "X";
  Y:string = "Y";
  img:string = "";

  msg:string = "";

  constructor(
    private service: PlanetasService,
    private _Activatedroute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.X = this._Activatedroute.snapshot.params['ID'];
    if (this.X != null) {
      this.service.getPlanetas().subscribe((res : any[])=>{
        console.log(res);
        console.log(res["images"][this.X]+' degrees for '+this.X);
        console.log(res["images"][this.X]);
        
        if(res["images"][this.X] === undefined){
          this.X = 'X';
          this.msg = "The planet entered does not exist!!"
        }else{
          this.Y = this.getDegrees(res["images"][this.X].degrees);
          this.img = res["images"][this.X].img;
          this.msg = '';
        }
      });
    }else{
      this.X = 'X';
    }
  }

  getDegrees(degrees:string){
    return Number.parseFloat(degrees).toFixed(4);
  }

}
