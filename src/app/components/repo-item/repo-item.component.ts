import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {

  @Input() repo!:any;

  constructor() { }

  ngOnInit(): void {
  } 

  goToLink(){
    window.open(this.repo.html_url, "_blank");
  }

}
