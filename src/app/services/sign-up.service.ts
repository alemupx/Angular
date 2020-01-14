import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})

export class SignUpService {

  constructor(private afAuth: AngularFireAuth, public router: Router) {

  }

  signUp(email: string, password: string) {

  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider)
        .then(res => {
          resolve(res);

        }).catch(error => {
          console.log('Error al intentar conectarse con Google.')
        })
    })
  }



}
