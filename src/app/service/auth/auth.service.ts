import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const { API, AUTH_API } = environment;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  refreshToken(token: string) {
    return this.http.post(API + AUTH_API + 'refreshtoken', {
      refreshToken: token
    }, httpOptions);
  }
}
