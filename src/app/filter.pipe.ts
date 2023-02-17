import { Pipe, PipeTransform } from '@angular/core';
import {MessagesArray} from "./Interfaces"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(messages: MessagesArray, action: String): MessagesArray {
    if(action !== 'All'){
      return messages.filter((msg => msg.action === action))
    }
    return messages
  }

}
