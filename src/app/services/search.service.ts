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

  makeSearchRequest (searchstring :string){
    let url = this.createSearchUrl(searchstring)
    if(url != ""){
      this.httpClient.get(url, httpOptions).subscribe((response :any) => {
        console.log("This is the data " + response.data)
        this.resultsList.next(response.data);
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
    
    return searchUrl;
  }

  getSearchResults (){
    return this.resultsList.asObservable()
  }

  updateSearchType(newType :string){
    this.searchType = newType
  }

}
