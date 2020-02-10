import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { item } from '../../../models/sunglasses.model';
import { SunglassesService } from '../../../services/sunglasses.service';


@Component({
  selector: 'app-add-sunglasses',
  templateUrl: './add-sunglasses.component.html',
  styleUrls: ['./add-sunglasses.component.css']
})
export class AddSunglassesComponent implements OnInit {

  estaSobreElemento = false;
  archivos: item[] = [];
  formulario: FormGroup;


  constructor(private servicioSubir: SunglassesService) {

    this.formulario = new FormGroup({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    if (!this.formulario.valid) {
      return;
    } 
    this.servicioSubir.setForm(this.formulario);

  }

  cargarImagenes() {
    this.servicioSubir.cargarImagenFirebase(this.archivos);
  }

  limpiarArchivos() {
    this.archivos = [];
    this.formulario.reset();
  }
}


