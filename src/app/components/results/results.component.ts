import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/models/Repo';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  testUser:User = {
    html_url:"https://github.com/kennjr",
    avatar_url:"https://avatars.githubusercontent.com/u/93252545?v=4",
    username:"kennjr",
    email:"kenjr@emails.com",
    followers_count:20,
    following_count:12,
    public_repo_count:23
  }

  testRepo: Repo = {
    repo_name:"GifsApp",
    repo_description:"An app that makes use of the giphy api to make queries for gifs",
    repo_url:"http://myhechar.pro",
    stars_count:500,
    major_lang:"TypeScript",
    last_update:"Today"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
