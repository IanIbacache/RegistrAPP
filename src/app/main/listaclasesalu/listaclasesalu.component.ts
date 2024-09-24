import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listaclasesalu',
  templateUrl: './listaclasesalu.component.html',
  styleUrls: ['./listaclasesalu.component.scss'],
})
export class ListaclasesaluComponent  implements OnInit {

  username: string;
  private authService = inject(AuthService);

  subscriptionAuthService: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.username$.subscribe(username => {
      this.username = username
    });
  }

  ngOnDestroy() {
    this.subscriptionAuthService?.unsubscribe();
  }

}
