import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BazaarConfig } from '../bazaar.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public userLogin(credentials: object): Observable<any> {

    // this url will be http://localhost:3000/users/login
    const url = BazaarConfig.getPath() + '/users/login';

    return this.http.post(url, credentials);
  }

  public userRegister(credentials: object): Observable<any> {
    const url = BazaarConfig.getPath() + '/users/register';

    return this.http.post(url, credentials);
  }
}