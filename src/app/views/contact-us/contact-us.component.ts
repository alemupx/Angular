import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  formulario: FormGroup;


  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  constructor() {
    this.formulario = this.createFormGroup();
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formulario.value);
    this.formulario.reset();
  }

}
