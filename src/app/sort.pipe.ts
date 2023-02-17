import { Pipe, PipeTransform } from '@angular/core';
import { MessagesArray } from "./Interfaces"

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(messages: MessagesArray, timeDirection: String): MessagesArray {
    if(timeDirection === 'ASC'){
      return messages.sort((a,b) => a.time - b.time)
    }
    return messages.sort((a,b) => b.time - a.time)

  }

}
