import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sunglasses',
  templateUrl: './add-sunglasses.component.html',
  styleUrls: ['./add-sunglasses.component.css']
})
export class AddSunglassesComponent implements OnInit {

  formulario: FormGroup;

  constructor() {

    this.formulario = new FormGroup({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      description: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario);
    this.formulario.reset();
  }

}


