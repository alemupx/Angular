import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor(private servicio: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(formulario: NgForm) {

    if (formulario.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere porfavor...'
    });

    Swal.showLoading();

    // console.log(this.usuario);

    this.servicio.nuevoUsuario(this.usuario).subscribe(resp => {
      Swal.close();
      if (this.recordarme) {
        localStorage.setItem('email', this.usuario.email);
      }
      this.router.navigateByUrl('/home');


    }, (err) => {
      Swal.fire({
        allowOutsideClick: false,
        icon: 'error',
        text: `${err.error.error.message}`
      });
    });


  }


}
