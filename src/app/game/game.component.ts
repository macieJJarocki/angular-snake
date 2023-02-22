import { AfterViewInit, Component, ViewChild, Output, Input, EventEmitter} from '@angular/core';
import { Message } from '../Interfaces';
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
  public actionsArray: Message[] = [] 
  public actionTime: number = 0
  
  @Output() usernameEvent = new EventEmitter<string>()
  
  @Input() username = ''
  
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
    this.actionsArray.push(actionMessage)
  }

  onClickedExitButton(){
    this.usernameEvent.emit('')
  }

  }
