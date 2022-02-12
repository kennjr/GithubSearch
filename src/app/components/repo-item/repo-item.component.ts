import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/models/Repo';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {

  @Input() repo!:Repo;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
