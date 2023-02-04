import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageFormComponent } from './home-page-form/home-page-form.component';
import { GameComponent } from './game/game.component';
import {NgxSnakeModule} from 'ngx-snake';
import { ActionsLogComponent } from './actions-log/actions-log.component';
import { TimerComponent } from './timer/timer.component'
// import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageFormComponent,
    GameComponent,
    ActionsLogComponent,
    TimerComponent,
    // EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxSnakeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
