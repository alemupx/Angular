import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Sunglasses } from '../model/sunglasses.interface'

@Injectable({
  providedIn: 'root'
})

export class DataDbService {
  private coleccionUsuario: AngularFirestoreCollection<Sunglasses>;

  constructor(afs: AngularFirestore) {
    this.coleccionUsuario = afs.collection<Sunglasses>('SunglassesFeed')
  }

  traerGafas() {

    this.coleccionUsuario.;


  }

  agregarGafas(gafas: Sunglasses): void {
    this.coleccionUsuario.add(gafas);
  }
}
