import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { DataDbService } from '../servicios/data-db.service'

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {

  createFormGroup() {
    return new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.email])),
      password: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });
  }

  genders = [
    { name: 'Female', abbreviation: 'F' },
    { name: 'Male', abbreviation: 'M' },
    { name: 'Custom', abbreviation: 'C' },
  ];


  formulario: FormGroup;
  constructor(private dbData: DataDbService) {

    this.formulario = this.createFormGroup();

  }

  onSubmit() {
    console.log(this.formulario.value);
    this.dbData.crearUsuario(this.formulario.value);
  }
}
