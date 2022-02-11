import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  makeSearchRequest (searchstring :string){
    let url = this.createSearchUrl(searchstring)
    
    return this.httpClient.get(url);
  }

  createSearchUrl (searchstring :string): string{
    let trimmedSearchString = searchstring.trim()
    let requestUrl = 'https://api.github.com/users/' + trimmedSearchString + '?access_token=' + environment.access_token;
    return requestUrl;
  }
}
