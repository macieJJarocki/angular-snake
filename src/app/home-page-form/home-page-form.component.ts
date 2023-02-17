import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page-form',
  templateUrl: './home-page-form.component.html',
  styleUrls: ['./home-page-form.component.scss']
})
export class HomePageFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = ''
  email = ''


  @Output() userNameEvent = new EventEmitter<string>()

  onSubmit(form: NgForm){
    this.username = form.form.controls['username'].value
    this.email = form.form.controls['email'].value

    this.userNameEvent.emit(this.username)
  }
}

