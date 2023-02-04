import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import { Message } from '../MessageInterface';
import { TimerComponent } from '../timer/timer.component';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements AfterViewInit {
  
  private userActionsMSG: Object = {
    'Start' : 'User clicked start button',
    'Stop' : 'User clicked stop button',
    'Reset' : 'User clicked reset button',
    'Up' : 'User clicked up button',
    'Left' : 'User clicked left button',
    'Right' : 'User clicked right button',
    'Down' : 'User clicked down button',
  }
  public snakeFoodEaten = 0;
  public actionArray: Message[] = [] 
  public actionTime: number = 0
  
  @ViewChild(TimerComponent) timer!: TimerComponent
  
  constructor() {}

  ngAfterViewInit(): void {
  }

  public onFoodEaten(isFoodEaten: unknown){
    if (!isFoodEaten) {
      this.snakeFoodEaten = this.snakeFoodEaten + 10; 
    }
  }

  onClickedButton(element: HTMLElement){
    const action = element.innerText
    const actionMessage = {action: action, time: this.timer.currentTime} 
    this.actionArray.push(actionMessage)
  }

  }
