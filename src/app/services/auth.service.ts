import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyDUAxgTM4_qyxm5odezVen34w2pJ2sZL4g';

  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('expira');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(`${this.url}:signInWithPassword?key=${this.apiKey}`, authData).pipe(map(resp => {
      this.guardarToken(resp['idToken']);
      return resp;
    }));
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(`${this.url}:signUp?key=${this.apiKey}`, authData).pipe(map(resp => {
      this.guardarToken(resp['idToken']);
      return resp;
    }));
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    ;
    localStorage.setItem('expira', hoy.setSeconds(3600).toString());

  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {

    if (this.userToken.length < 2) {
      return false
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
