import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Sunglasses } from '../../services/sunglasses.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  mostrar = false;
  lista: Sunglasses[];

  constructor(private cart: CartService) { }

  ngOnInit() {

    this.lista = this.cart.getProductos();
    if (this.lista.length !== 0) {
      this.mostrar = true;
      // console.log(this.lista[0]['objeto']);
    } else {
      this.mostrar = false;
    }

  }


  operar(operacion: string, index: number) {

    if (operacion === '+') {
      this.lista[index]['cantidad']++;
    }

    if (operacion === '-') {

      if (this.lista[index]['cantidad'] <= 1) {
        this.lista.splice(index, 1);
        // console.log(this.cart.getCantidad());
        if (this.lista.length == 0) {
          // console.log('Corran que voy a explotar hijos de su puta madre >:V');
      this.mostrar = false;

        }

        return;
      }


      this.lista[index]['cantidad']--;
      // console.log(this.cart.getCantidad());

      if (this.cart.getCantidad() === 0) {

        this.mostrar = false;
      }

    }

  }

}
