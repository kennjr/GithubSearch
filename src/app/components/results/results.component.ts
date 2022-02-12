import { Component, OnDestroy, OnInit } from '@angular/core';
import { Repo } from 'src/app/models/Repo';
import { User } from 'src/app/models/User';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {

  searchResults:any[] = []

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

  constructor(private searchservice :SearchService) { }

  ngOnInit(): void {
    this.getSearchResults()
  }

  subscription!: Subscription;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    throw new Error('Method not implemented.');
  }

  getSearchResults (){
    this.subscription = this.searchservice.getSearchResults().subscribe((response : any) => {
      console.log("The list is " + response)
      this.searchResults.push(...response)
    })
  }

}
