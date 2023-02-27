import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket : Socket) { }
  sendMsg(msg: any){
    this.socket.emit('message', msg);
  }

  getMsg(roomID: string){
    return this.socket.fromEvent(`message-${roomID}`);
  }
}

