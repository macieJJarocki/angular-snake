import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page-form',
  templateUrl: './home-page-form.component.html',
  styleUrls: ['./home-page-form.component.scss']
})
export class HomePageFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() userDataEvent = new EventEmitter<string>()

  sendName(name:string){
    this.userDataEvent.emit(name)
  }
}
