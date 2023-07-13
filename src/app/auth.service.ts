import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private isLogged = false;

  constructor(){}

  isLoggedIn() {
    return this.isLogged;
  }

  setLoggedIn(value:boolean){
    this.isLogged = value;
  }
}
