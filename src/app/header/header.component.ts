import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.keycloakService.isLoggedIn().then(value => this.loggedIn = value);
  }

  async onLogin(){
    await this.keycloakService.login({
      
        redirectUri: window.origin,
        prompt:'login'
    })
  }
  async onLogout(){
    localStorage.removeItem("access_token");
    await this.keycloakService.logout(window.origin)
  }

  async onRegister(){
    
    await this.keycloakService.register({
      redirectUri: window.origin,
      prompt:'login'
    })
  }

}
