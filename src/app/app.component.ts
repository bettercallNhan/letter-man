import { ChatService } from './services/chat.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';
  newRoom!: string;
  userName!: string;
  message$!: Observable<any>;
  messages: any[] = [];
  newMessage!: string;

  constructor(private chatService: ChatService) { }
  sendMessage() {
    let newMsg ={
      from : this.userName,
      msg : this.newMessage,
      roomID : this.newRoom
    }
    this.chatService.sendMsg(newMsg);
  }
  joinRoom(){
    this.message$ = this.chatService.getMsg(this.newRoom);
    this.message$.subscribe((msg: any) => {
      this.messages.push(msg);
      console.log(msg);
    });
  }
}
