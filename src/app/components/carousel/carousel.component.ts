import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { DataDbService } from 'src/app/services/data-db.service';
import { Sunglasses } from 'src/app/models/sunglasses.interface';
import { Tarjeta } from 'src/app/models/tarjeta.interface';


@Component({
  selector: 'icarousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  lista: Sunglasses[];
  tarjetas: Tarjeta[] = [];

  constructor(private cdr: ChangeDetectorRef, private breakpointObserver: BreakpointObserver, private servicio: DataDbService) { }


  ngOnInit() {


    this.servicio.traerGafas().subscribe(
      documento => {

        this.lista = documento.map(
          item => {
            return { id: item.payload.doc.id, ...item.payload.doc.data() } as Sunglasses
          });



        this.lista.forEach(element => {
          let tarjetaTemporal = {} as Tarjeta;
          tarjetaTemporal.id = element.id;
          tarjetaTemporal.title = element.title;
          tarjetaTemporal.cols = 2;
          tarjetaTemporal.rows = 2;
          tarjetaTemporal.subtitle = element.subtitle;
          tarjetaTemporal.description = element.description;
          tarjetaTemporal.src = element.url;

          this.tarjetas.push(tarjetaTemporal);
        });
      });
  }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ }) => {
      return this.tarjetas;
    })
  );

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  eliminar(id) {
    this.servicio.eliminarGafas(id);
  }

}
