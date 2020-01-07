import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { ConctactUs } from '../models/conctactUs.interface copy'
@Injectable({
  providedIn: 'root'
})

export class ContactUsService {


  private coleccionComentarios: AngularFirestoreCollection<ConctactUs>;

  constructor(private firestore: AngularFirestore) {
    this.coleccionComentarios = firestore.collection<ConctactUs>('ConctatUsList')
  }

  agregarComentario(comentario: ConctactUs) {
    let entregado: boolean;
    try {
      this.coleccionComentarios.add(comentario);
      return entregado = true;
    } catch (error) {
      return entregado = false;
    }
  }

}
