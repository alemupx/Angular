import { Component, OnInit } from '@angular/core';
import { SunglassesService, Sunglasses } from 'src/app/services/sunglasses.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sunglassesList: Sunglasses[];

  constructor(private _sunglassesService: SunglassesService, ) {
  }

  ngOnInit() {
    this._sunglassesService.traerGafas().subscribe(accion => {
      this.sunglassesList = accion.map(item => {
        return { id: item.payload.doc.id, ...item.payload.doc.data() } as Sunglasses
      });
    });
  }

}
