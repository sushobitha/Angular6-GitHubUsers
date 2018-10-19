import { Component } from '@angular/core';
import { SearchService } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  results: any;
  details: any;
  showFlag: boolean = false;
  constructor(private searchService: SearchService) {

  }

  clearall(){
    this.results = [];
    
  }

  searchText(term) {
    if (term) {
      this.searchService.searchUsers(term).subscribe(res => {
        this.results = res;
        this.results = this.results.items;
      });
    }
  }

  showDetails(item) {
    this.showFlag = true;
    this.details = {
      'avatar': item.avatar_url,
      'followers_url': item.followers_url,
      'type': item.type,
      'repos_url': item.repos_url
    }
  }
}
