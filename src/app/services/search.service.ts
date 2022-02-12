import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    "Authorization": environment.access_token
  })
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  searchType:string = "Users";
  resultsList = new BehaviorSubject<any>([]);
  resultsCount = new BehaviorSubject<any>(0);

  makeSearchRequest (searchstring :string){
    let url = this.createSearchUrl(searchstring)
    if(url != ""){
      this.httpClient.get(url, httpOptions).subscribe((response :any) => {
        if(!response.incomplete_results){
          this.resultsCount.next(response.total_count)
          this.resultsList.next(response.items);
        }
      })
    }
  }

  createSearchUrl (searchstring :string): string{
    let trimmedSearchString = searchstring.trim()
    let searchUrl = "";
    if(this.searchType === "Users"){
      searchUrl = `https://api.github.com/search/users?q=${trimmedSearchString}`;
    }else if(this.searchType === "Repos"){
      searchUrl = `https://api.github.com/search/repositories?q=${trimmedSearchString}`;
    }

    console.log("The type is " + this.searchType)
    
    return searchUrl;
  }

  getSearchResults (){
    return this.resultsList.asObservable()
  }

  getResultsCount (){
    return this.resultsCount.asObservable()
  }

  updateSearchType(newType :string){
    this.searchType = newType
  }

}
