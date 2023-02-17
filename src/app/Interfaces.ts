export {Message, MessagesArray}

interface Message{
    action: string,
    time: number
  }

interface MessagesArray extends Array<Message>{}