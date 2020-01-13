import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactUsService } from '../../services/conctact-us.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  formulario: FormGroup;


  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  constructor(private servicio: ContactUsService, private ventanaEmergente: ToastrService) {
    this.formulario = this.createFormGroup();
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      if (this.servicio.agregarComentario(this.formulario.value)) {
        this.ventanaEmergente.success('Se ha enviado tu comentario correctamente.', 'Enhorabuena!');
        this.formulario.reset();
      } else {
        this.ventanaEmergente.error('Parece que algo anda mal.', 'Ups');

      }



    }
  }

}
