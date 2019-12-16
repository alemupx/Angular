import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataDbService } from '../../servicios/data-db.service'
import { ToastrService } from 'ngx-toastr'
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  createFormGroup() {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      image: new FormControl('', Validators.required),
    });
  }


  formulario: FormGroup;
  downloadURL: Observable<string>;


  constructor(private dbData: DataDbService, private almacenamiento: AngularFireStorage, private toastr: ToastrService) {
    this.formulario = this.createFormGroup();
  }

  onUpload(evento) {
    const id = Math.random().toString(36).substring(2);
    const file = evento.target.files[0];
    const filePath = `uploads/${id}`;
    const ref = this.almacenamiento.ref(filePath);
    const task = this.almacenamiento.upload(filePath, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = ref.getDownloadURL()
      })
    ).subscribe();

  }

  onSubmit() {

    if (this.formulario.valid) {
      console.log(this.formulario.value);
      console.log(this.downloadURL);
      // this.dbData.agregarGafas(this.formulario.value);
      // this.formulario.reset();
      // this.toastr.success('Se ha agregado un nuevo item', 'Enhora buena');


    } else {
      console.log('Falta level bro...');
    }

  }
}
