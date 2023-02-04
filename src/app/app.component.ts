import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snake_app';

  username = ''

  reciveUsername(name:string){
    this.username = name
  }
}
