import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Sunglasses } from '../models/sunglasses.interface'

@Injectable({
  providedIn: 'root'
})

export class SunglassesService {


  private coleccionGafas: AngularFirestoreCollection<Sunglasses>;

  constructor(private firestore: AngularFirestore) {
    this.coleccionGafas = firestore.collection<Sunglasses>('Gafas')
  }

  traerGafas() {
    return this.firestore.collection('Gafas').snapshotChanges();
  }

  getArray() {
    return this.firestore.collection('Gafas');

  }

  agregarGafas(gafas: Sunglasses): void {
    this.coleccionGafas.add(gafas);
  }

  eliminarGafas(id) {
    this.firestore.collection('Gafas').doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}
