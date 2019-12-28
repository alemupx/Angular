import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { DataDbService } from 'src/app/services/data-db.service';
import { Sunglasses } from 'src/app/models/sunglasses.interface';
import { Tarjeta } from 'src/app/models/tarjeta.interface';

@Component({
  selector: 'tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})

export class TarjetasComponent {

  lista: Sunglasses[];
  tarjetas: Tarjeta[] = [];



  constructor(private breakpointObserver: BreakpointObserver, private servicio: DataDbService) { }

  ngOnInit() {
    


    let identificacion = '';
    this.servicio.traerGafas().subscribe(accion => {
      this.lista = accion.map(item => {
        return { id: item.payload.doc.id, ...item.payload.doc.data() } as Sunglasses
      });

      console.log('ngOnInit Tarjetas');
      console.log(this.lista);

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

    })

  }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ }) => {
      return this.tarjetas;
    })
  );

  eliminar(id) {
    this.servicio.eliminarGafas(id);
  }

}
