import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://localhost:7125/api/Users";
  users$! : Observable<User[]>;
  constructor(private http: HttpClient) { }

  getUsers(){
    this.http.get<User[]>(this.url).subscribe(data=>{
      this.users$ = of(data);
    })
  }

  addUser(event: User){
    return this.http.post<User>(this.url, event);
  }
}

// export class UserService {
//   private url = "https://localhost:7125/api/Users";

//   constructor(private http: HttpClient) { }

//   getUsers() : Observable<User[]> {
//     return this.http.get<User[]>(this.url);
//   }

//   addUser(event: User){
//     return this.http.post<User>(this.url, event);
//   }

// }
