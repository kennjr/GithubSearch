import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user!:any;
  @Output() onViewDetailsRequest :EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  viewDetails(){
    this.onViewDetailsRequest.emit(this.user)
  }

  openInGithub(){
    window.open(this.user.html_url, "_blank")
  }

}
