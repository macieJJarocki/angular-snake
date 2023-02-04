import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../MessageInterface';

@Component({
  selector: 'app-actions-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.scss']
})
export class ActionsLogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  actionOptions: string[] = ['Start','Stop','Reset','Up','Left','Right','Down']
  timeOptions: string[] = ['ASC', 'DESC']

  @Input() msg: Message[] = []
  actionFlag = ''
  sortedBy = ''
  msgFiltered : Message[] = []
  msgSorted : Message[] = []

  getMessagesSortByTime(order: string){

    if(this.msgFiltered.length > 0){
      if(order === 'DESC') {
        this.msgFiltered.sort((a,b) => b.time- a.time)
      }else{
        this.msgFiltered.sort((a,b) => a.time - b.time)
      }
    }else{
      if(order === 'DESC'){
        this.msg.sort((a,b) => b.time- a.time)
      }else{
        this.msg.sort((a,b) => a.time - b.time)
      }
    }
  }

  getMessagesFilteredByActions(actionSelected: string){
    this.msgFiltered = this.msg.filter((msg) => msg.action === actionSelected)
  }
}
