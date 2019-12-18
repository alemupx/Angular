import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataDbService } from '../../servicios/data-db.service'
import { ToastrService } from 'ngx-toastr'
import { AngularFireStorage } from '@angular/fire/storage'
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
      url: new FormControl('', Validators.required),
    });
  }


  formulario: FormGroup;
  foo: String[] = [];


  constructor(private dbData: DataDbService, private almacenamiento: AngularFireStorage, private toastr: ToastrService) {
    this.formulario = this.createFormGroup();
  }

  onUpload(evento) {
    const id = Math.random().toString(36).substring(2);
    const file = evento.target.files[0];
    const filePath = `gafasTarjetas/${id}`;
    const ref = this.almacenamiento.ref(filePath);
    const task = this.almacenamiento.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(downloadURL => {
            this.foo.push(downloadURL);                        
          });
        })
      )
      .subscribe();



  }

  onSubmit() {
    // this.formulario.patchValue({ title: "1" });
    // this.formulario.patchValue({ subtitle: "Lorem" });
    // this.formulario.patchValue({ description: "Ipsum" });
    // this.formulario.patchValue({ image: "C:\fakepath\1.jpg"});
    this.formulario.patchValue({ url: this.foo[0] });
    console.log(this.formulario.value);


    if (this.formulario.valid) {
      console.log(this.foo);
      console.log(this.formulario.value);
      this.dbData.agregarGafas(this.formulario.value);
      // this.foo[0] = null;
      this.formulario.reset();
      this.toastr.success('Se ha agregado un nuevo item', 'Enhora buena');
    } else {}
    //   console.log('Error al enviar información');
    //   console.log(this.foo[0]);
    //   console.log(this.formulario.value);
    // }

  }
}
