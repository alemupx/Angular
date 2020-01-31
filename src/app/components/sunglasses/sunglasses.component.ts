import { Component, OnInit } from '@angular/core';
import { SunglassesService, Sunglasses } from '../../services/sunglasses.service';

@Component({
  selector: 'app-sunglasses',
  templateUrl: './sunglasses.component.html',
  styleUrls: ['./sunglasses.component.css']
})

export class SunglassesComponent implements OnInit {

  sunglassesList: Sunglasses[];

  constructor(private _sunglassesService: SunglassesService) { }

  ngOnInit() {
    this._sunglassesService.traerGafas().subscribe(accion => {
      this.sunglassesList = accion.map(item => {
        return { id: item.payload.doc.id, ...item.payload.doc.data() } as Sunglasses
      });
    });
  }

}
