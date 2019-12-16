import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../servicios/data-db.service';
import { Sunglasses } from 'src/app/model/sunglasses.interface';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  lista: Sunglasses[];
  constructor(private servicio: DataDbService) { }

  ngOnInit() {
    this.servicio.traerGafas().subscribe(accion=>{
      this.lista = accion.map(item=>{
        return {id: item.payload.doc.id,...item.payload.doc.data()} as Sunglasses
      });
    }) 
  }

}
