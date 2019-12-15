import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataDbService } from '../../servicios/data-db.service'

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  createFormGroup() {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      subTitle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
      // image: new FormControl('', Validators.required),
    });
  }


  formulario: FormGroup;


  constructor(private dbData: DataDbService) {
    this.formulario = this.createFormGroup();
  }

  onSubmit() {

    console.log(this.dbData.traerGafas());
    // if (this.formulario.valid) {
    //   console.log(this.formulario.value);
    //   this.dbData.agregarGafas(this.formulario.value);
    //   this.formulario.reset();
    //   console.log(this.dbData.traerGafas());
    // } else {
    //   console.log('Falta level bro...');
    // }

  }
}
