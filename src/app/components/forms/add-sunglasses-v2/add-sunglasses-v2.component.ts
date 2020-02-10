import { Component } from '@angular/core';
import { item } from '../../../models/sunglasses.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SunglassesService } from '../../../services/sunglasses.service';

@Component({
  selector: 'app-add-sunglasses-v2',
  templateUrl: './add-sunglasses-v2.component.html',
  styleUrls: ['./add-sunglasses-v2.component.css']
})
export class AddSunglassesV2Component {

  estaSobreElemento = false;
  archivos: item[] = [];
  formulario: FormGroup;

  constructor(private servicioSubir: SunglassesService) {
    this.formulario = new FormGroup({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      image: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (!this.formulario.valid) {
      return;
    }
    this.servicioSubir.setForm(this.formulario);
  }

  limpiarArchivos() {
    this.archivos = [];
    this.formulario.reset();
  }

  onUpload(evento) {
    const file = evento.target.files[0];
    const nuevoArchivo = new item(file);
    this.archivos.push(nuevoArchivo);
    // console.log(this.archivos);
  }

  cargarImagen() {
    this.servicioSubir.cargarImagenFirebase(this.archivos);
  }

}
