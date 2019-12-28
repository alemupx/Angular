import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { DataDbService } from '../../services/data-db.service'
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
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
      url: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }


  formulario: FormGroup;
  image: any;
  foo: any;


  constructor(private dbData: DataDbService, private almacenamiento: AngularFireStorage, private toastr: ToastrService) {
    this.formulario = this.createFormGroup();
  }


  ngOnInit() {
    console.log('ngOnInit Form')
    this.foo = this.dbData.getArray();
    console.log(this.foo)
  }

  onUpload(evento) {
    const file = evento.target.files[0];
    this.image = file;
    this.formulario.patchValue({ url: file });

    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const id = Math.random().toString(36).substring(2);
        const filePath = `gafasTarjetas/${id}`;
        const ref = this.almacenamiento.ref(filePath);
        const task = this.almacenamiento.upload(filePath, file);
        task
          .snapshotChanges()
          .pipe(
            finalize(() => {
              ref.getDownloadURL().subscribe(downloadURL => {
                this.formulario.patchValue({ url: downloadURL });
                console.log(this.formulario.value);
              });
            })
          )
          .subscribe();
        resolve();
      }, 5000);
    });






  }


  onSubmit() {
    if (this.formulario.valid) {
      const file = this.formulario.get('url').value
      console.log(file);

      console.log(this.formulario.value)
      this.dbData.agregarGafas(this.formulario.value);
      this.formulario.reset();
      this.toastr.success('Se ha agregado un nuevo item', 'Enhora buena');
    }

  }


}
