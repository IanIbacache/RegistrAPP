import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/data.models';
import { userSimulated } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

  buscarBD3(username: string, password: string): Promise<User | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userFound = userSimulated.find(u => u.username === username && u.password === password);

        if (userFound) {
          this.isAuthenticatedSubject.next(true);
          this.usernameSubject.next(userFound.fullName);
          this.loginFailedSubject.next(false);
          resolve(userFound);
        } else {
          this.isAuthenticatedSubject.next(false);
          this.loginFailedSubject.next(true);
          resolve(null);
        }
      }, 4000);
    });
  }
}
