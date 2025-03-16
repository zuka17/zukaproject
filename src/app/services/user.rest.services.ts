import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrls } from './apiurls';
import { Observable } from 'rxjs';
import { Iuser } from '../interface/interface';
@Injectable({
  providedIn: 'root',
})
export class userRestService {
    constructor(private http: HttpClient) { }
    
    public getUsers() : Observable<Iuser[]> {
        return this.http.get<Iuser[]>(apiUrls.users);
    }
  public getUserById(id:number): Observable<Iuser>{
       return this.http.get<Iuser>(`${apiUrls.users}/${id}`);
  }
  public createUser(user:Iuser): Observable<Iuser>{
    return this.http.post<Iuser>(apiUrls.users, user)
  }
  public updateUsers(user: Iuser): Observable<Iuser>{
     return this.http.put<Iuser>(`${apiUrls.users}/${user.id}`,user);
  }
}
