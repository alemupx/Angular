import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SunglassesService } from '../../services/sunglasses.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { CartService } from '../../services/cart.service';



export interface DialogData {
  id: number;
  cantidad: number;
}

@Component({
  selector: 'app-sunglass-card',
  templateUrl: './sunglass-card.component.html',
  styleUrls: ['./sunglass-card.component.css']
})
export class SunglassCardComponent implements OnInit {

  @Input() sunglass: any = {};
  @Input() id: number;
  cantidad: number;


  constructor(
    private router: Router,
    private servicio: SunglassesService,
    private auth: AuthService,
    public dialog: MatDialog,
    private cart: CartService,
  ) {
  }

  ngOnInit() {
    this.cantidad = this.cart.getCantidad();
  }


  estaLogueado() {
    return this.auth.estaAutenticado();
  }

  viewSunglasses() {
    this.router.navigate(['/sunglass', this.id]);
  }

  deleteSunglasses(id) {
    this.servicio.eliminarGafas(id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { cantidad: this.cantidad, objeto: this.sunglass }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (!result) {
        console.log('No seleccionaste nada...');
        return;
      }

      console.log(result);





    });
  }

  verCantidad() {
    console.log(this.cart.getCantidad());



  }


}


