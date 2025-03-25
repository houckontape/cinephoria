import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "https://cinephoria.tuxfarm.ovh/auth";
  private baseHeaders =new HttpHeaders().set('Content-Type', 'application/json');
  public user: Observable<Users>;
  public isAuthenticated:boolean=false;
  constructor(private http: HttpClient ) {
    this.user = new Observable();

  }

  auth(authData: any): Observable<Users> {
    this.user = this.http.post<Users>(this.apiUrl, authData,{headers: this.baseHeaders});
    if (this.user === null) {
      this.isAuthenticated = false
    }else{
      this.isAuthenticated = true;
    }

    return this.user;
  }


}
