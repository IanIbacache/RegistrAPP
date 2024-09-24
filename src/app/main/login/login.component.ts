import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  username: string = '';
  password: string = '';
  typeUser: number;

  private authService = inject(AuthService);
  private router =inject(Router);

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean;

  constructor() { }

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed);
  }

  isLoading: boolean = false;
  async login(username: string, password: string): Promise<void> {
    this.isLoading = true;
    this.loginFailed = false;

    const user = await this.authService.buscarBD3(username, password);

    this.isLoading = false;

    if (user && (user.typeUser === 2)) {
      this.username = '';
      this.password = '';
      this.router.navigate(['/alumno']);

    } else if(user && (user.typeUser === 1)){

      this.loginFailedSubject.next(true);
      this.username = '';
      this.password = '';
      this.router.navigate(['/']);

    } else if(user && (user.typeUser === 3)){

      this.loginFailedSubject.next(true);
      this.username = '';
      this.password = '';
      this.router.navigate(['/profesor']);
    } else {
      this.loginFailed = true;
    }
  }
}
