import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { item } from '../models/sunglasses.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class SunglassesService {

  sunglassesList: Sunglasses[];
  formulario: FormGroup;

  private CARPETA_IMAGENES = 'img';

  private coleccionGafas: AngularFirestoreCollection<Sunglasses>;

  constructor(private firestore: AngularFirestore) {
    console.log('Servicio Gafas iniciado...');
    this.coleccionGafas = firestore.collection<Sunglasses>('Gafas');
  }

  agregarGafas(gafas): void {
    this.firestore.collection('Gafas').add(gafas);
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

  buscarGafas(termino: string): Sunglasses[] {

    let sunglassesList: Sunglasses[] = [];

    this.traerGafas().subscribe(accion => {

      //La lista luego de mapear el item recibe todos los elementos eun Array
      this.sunglassesList = accion.map(item => {


        return { id: item.payload.doc.id, ...item.payload.doc.data() } as Sunglasses

      });

      //Recorre ese array para obtener cada elemento y así compararlo hasta encontrar el termino.
      this.sunglassesList.forEach(element => {
        if (element.title.toLowerCase().indexOf(termino.toLowerCase()) >= 0) {
          sunglassesList.push(this.traerGafa(element.id));
          console.log(element);

        }
      });

    });

    return sunglassesList;

  }

  cargarImagenesFirebase(imagenes: item[]) {
    // console.log(imagenes);
    const storageRef = firebase.storage().ref();

    for (const item of imagenes) {

      item.estaSubiendo = true;
      if (item.progreso >= 100 && this.isForm()) {
        continue;
      } else {
        const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          (error) => console.error('Error al subir', error),
          () => {
            console.log('Imagen Cargada correctamente');

            uploadTask.snapshot.ref.getDownloadURL()
              .then((link) => {
                item.estaSubiendo = false;
                this.formulario = this.getForm();
                this.guardarImagen({ title: this.formulario.controls['title'].value, subtitle: this.formulario.controls['subtitle'].value, description: this.formulario.controls['description'].value, url: link });
                
              });



          }
        );



      }

    }
  }

  private guardarImagen(imagen: { title: string, subtitle: string, description: string, url: string }) {
    this.firestore.collection('Gafas').add(imagen);
  }

  setForm(form: FormGroup) {
    if (form) {
      this.formulario = form;
    } else {
      return;
    }
  }

  private getForm() {
    return this.formulario;
  }

  private isForm(): boolean {
    if (this.getForm()) {
      return true;
    } else {
      return false;
    }
  }

}

export interface Sunglasses {
  id: number,
  title: string,
  subtitle: string,
  description: string,
  url: string,
}