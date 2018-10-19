import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {
  }

  searchUsers(term){
    
    const url = '';
    return this.http.get(`https://api.github.com/search/users?q=${term}`);
  }

}
