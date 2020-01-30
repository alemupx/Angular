import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class SunglassesService {

  sunglassesList: Sunglasses[];

  private coleccionGafas: AngularFirestoreCollection<Sunglasses>;

  constructor(private firestore: AngularFirestore) {
    console.log('Servicio Gafas iniciado...');
    this.coleccionGafas = firestore.collection<Sunglasses>('Gafas');
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



  traerGafas() {
    return this.firestore.collection('Gafas').snapshotChanges();
  }

  traerGafa(id: any): Sunglasses {
    let foo = new Array();
    let gafasTemporales = {} as Sunglasses;

    this.traerGafas().subscribe(accion => {

      //La lista luego de mapear el item recibe todos los elementos un Array
      this.sunglassesList = accion.map(item => {
        return { id: item.payload.doc.id, ...item.payload.doc.data() } as Sunglasses
      });

      //Recorre ese array para obtener cada elemento y así 
      this.sunglassesList.forEach(element => {
        if (element.id == id) {
          gafasTemporales.id = element.id;
          gafasTemporales.title = element.title;
          gafasTemporales.subtitle = element.subtitle;
          gafasTemporales.description = element.description;
          gafasTemporales.url = element.url;
          foo.push(gafasTemporales);
        }
      });
    });
    return gafasTemporales;
  }

  buscarGafas(termino: string): Sunglasses[]{

    let sunglassesList: Sunglasses[] = [];

    this.traerGafas().subscribe(accion => {

      //La lista luego de mapear el item recibe todos los elementos un Array
      this.sunglassesList = accion.map(item => {
        return { id: item.payload.doc.id, ...item.payload.doc.data() } as Sunglasses
      });

      //Recorre ese array para obtener cada elemento y así       
      this.sunglassesList.forEach(element => {

        // if (termino.toLowerCase().indexOf(element.title.toLowerCase()) >= 0) {        
        //   sunglassesList.push(this.traerGafa(element.id));
        // }
        
        if (element.title.toLowerCase().indexOf(termino.toLowerCase()) >= 0) {        
          sunglassesList.push(this.traerGafa(element.id));
        }
      });

    });

    return sunglassesList;
    
  }


}

export interface Sunglasses {
  id: number,
  title: String,
  subtitle: String,
  description: String,
  url: String,
}