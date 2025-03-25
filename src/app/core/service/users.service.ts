import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Users} from '../model/users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://www.tuxfarm.ovh/users';
  private baseHeaders =new HttpHeaders().set('Content-Type', 'application/json');
  private userSubject = new BehaviorSubject<Users| null>(null);

  constructor(private http: HttpClient ) { }

  // Met à jour les informations utilisateur dans le comportement subject
  setUser(user: Users): void {
    this.userSubject.next(user);
  }

  // Retourne l'observable contenant l'utilisateur connecté
  getUsers(): Observable<Users | null > {
    return this.userSubject.asObservable() as Observable<Users>;
  }
  // deconnection
  clearUser(): void {
    this.userSubject.next(null);
  }

  createUser(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post<any>(this.apiUrl, userData,{headers: this.baseHeaders});
  }

  //Renvoie si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return this.userSubject.getValue() !== null;
  }


}
