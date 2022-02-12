import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faArrow = faArrowLeft;
  faFilter = faFilter;
  @Output() onNavigateBack :EventEmitter<boolean> = new EventEmitter();

  showFilterOptions = false;
  searchType = "Users"

  searchString = "";

  constructor(private router:Router, private searchservice: SearchService) { }

  ngOnInit(): void {
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

  navigateBack(){
    this.onNavigateBack.emit(true);
  }

  // For making the search request based on the searchstring
  makeSearchDataRequest(){
    if(this.searchString !== "" && (this.searchType === "Users" || this.searchType === "Repos")){
      this.searchservice.makeSearchRequest(this.searchString)
    }
  }

  showFitlerOptions(){
    this.showFilterOptions = !this.showFilterOptions
  }

  changeSearchType (newType: string){
    if(newType == "Users" || newType == "Repos"){
      this.searchType = newType;
      this.searchservice.updateSearchType(newType)
    }
  }
  
}
