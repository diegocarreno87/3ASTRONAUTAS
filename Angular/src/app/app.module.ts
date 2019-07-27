import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { AppComponent } from './app.component';
import { FuselajeComponent } from './1-components/fuselaje/fuselaje.component';
import { MotorComponent } from './1-components/motor/motor.component';
import { CabinaComponent } from './1-components/cabina/cabina.component';
import { PlanetasService } from './2-services/planetas.service'
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FuselajeComponent,
    MotorComponent,
    CabinaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'planetas/:ID', component: FuselajeComponent },
      { path: 'control', component: FuselajeComponent }
    ])
  ],
  providers: [PlanetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
