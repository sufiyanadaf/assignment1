import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

//@Input() message : any;
   @Output() messageEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  sendMessage_1(){
       this.messageEvent.emit("My name is 'sufiya' ")
  }
  sendMessage_2(){
    this.messageEvent.emit(" ")
}

}
