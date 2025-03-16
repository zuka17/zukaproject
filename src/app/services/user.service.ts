import { Injectable } from '@angular/core';
import { userRestService } from './user.rest.services';
import { Observable } from 'rxjs';
import { Iuser } from '../interface/interface';
@Injectable({
  providedIn: 'root',
})
export class userService {
    constructor(private userestservice: userRestService) { }
    
  public getUsers(): Observable<Iuser[]> {
    return this.userestservice.getUsers();
  }
  public createUser(user: Iuser): Observable<Iuser> {
    return this.userestservice.createUser(user);
  }
}
