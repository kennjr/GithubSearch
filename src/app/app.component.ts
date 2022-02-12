import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GithubSearch';

  backNavigationRequest(status: boolean){
    if(status){
      // Navigate to the prev. frag.
    }
  }
}
