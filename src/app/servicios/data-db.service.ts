import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Sunglasses } from '../model/sunglasses.interface'

@Injectable({
  providedIn: 'root'
})

export class DataDbService {


  private coleccionGafas: AngularFirestoreCollection<Sunglasses>;

  constructor(private firestore: AngularFirestore) {
    this.coleccionGafas = firestore.collection<Sunglasses>('Gafas')
  }

  traerGafas() {
    return this.firestore.collection('Gafas').snapshotChanges(); 
  }

  agregarGafas(gafas: Sunglasses): void {
    this.coleccionGafas.add(gafas);
  }
}
