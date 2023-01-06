import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const { USER_KEY, TOKEN_KEY,REFRESHTOKEN_KEY } = environment;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);

    const user = this.getUser();
    if (user.id) {
      this.saveUser({ ...user, accessToken: token });
    }
  }

  getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  saveRefreshToken(token: string): void {
    window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
    window.sessionStorage.setItem(REFRESHTOKEN_KEY, token);
  }

  getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
  }

  saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
