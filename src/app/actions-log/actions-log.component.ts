import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../Interfaces';

@Component({
  selector: 'app-actions-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.scss']
})
export class ActionsLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() msg: Message[] = []

  actionOptions: string[] = ['All', 'Start','Stop','Reset','Up','Left','Right','Down']
  timeOptions: string[] = ['ASC', 'DESC']

  actionFlag = 'All'
  sortedBy = 'ASC'
  
}
