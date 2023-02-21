import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  currentTime = 0
  
  // TODO change refreshTimer type
  refreshTimer: any
    
  startCountdown(){
    const initialTime = Date.now() - this.currentTime
    this.refreshTimer = setInterval(() => {this.currentTime = Date.now() - initialTime})
  }

  stopCountdown(){
   clearInterval(this.refreshTimer)
  }

}
  
  


