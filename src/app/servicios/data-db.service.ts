import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface'

@Injectable({
  providedIn: 'root'
})

export class DataDbService {
  private coleccionUsuario: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore) {
    this.coleccionUsuario = afs.collection<User>('usuariosRegistrados')
  }

  crearUsuario(nuevoUsuario: User): void {
    this.coleccionUsuario.add(nuevoUsuario);
  }
}
