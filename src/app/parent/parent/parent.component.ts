import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  message_parent: any;
  myContent: any;
  isTrue: any;

  r_Message : any;

  constructor() { }

  ngOnInit(): void {
    //this.isTrue = false;
  }

  //myFunction() {
    //if (this.isTrue == true) {
      //this.myContent = " My name is sufiya"
    //}
    //else {
     // this.myContent = " My name is not sufiya"
  //  }
  //}

  recieveMessage(event:any){
      this.r_Message = event;
  }
}
