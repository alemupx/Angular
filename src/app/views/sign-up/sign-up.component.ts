import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formulario: FormGroup;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordSecure: new FormControl('', Validators.required),
    });
  }

  constructor(private ventanaEmergente: ToastrService, private gestor: SignUpService, ) {
    this.formulario = this.createFormGroup();
  }

  ngOnInit() {
  }

  onSubmit() {
  }

  onClick() {
    this.gestor.doGoogleLogin();
  }

}