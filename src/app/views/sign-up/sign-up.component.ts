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
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }



  constructor(private ventanaEmergente: ToastrService, private gestor: SignUpService,) {

    this.formulario = this.createFormGroup();
  }

  ngOnInit() {
  }

  onClick(){
    this.gestor.doGoogleLogin();
  }


}
