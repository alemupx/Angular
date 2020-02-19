import { Injectable } from '@angular/core';
import { Sunglasses } from './sunglasses.service';



@Injectable({
  providedIn: 'root'
})


export class CartService {

  private productos = new Array();


  constructor() {

  }

  addToCart(item: { cantidad: number, objeto: Sunglasses }) {


    let foo = 0;

    for (let posicionArreglo = 0; posicionArreglo < this.getCantidad(); posicionArreglo++) {


      if (item.objeto.id === this.productos[posicionArreglo].objeto.id) {

        // Hay un item igual al recien añadido entonces solo sumele la cantidad nueva a la vieja.

        foo = foo + this.productos[posicionArreglo].cantidad + item.cantidad;

        this.productos[posicionArreglo].cantidad = foo;

        // console.log(this.getProductos());

        return;
      }

    }

    this.productos.push(item);

    // console.log(this.getProductos());

  }

  getCantidad(): number {
    return this.productos.length;
  }

  getProductos(): Sunglasses[] {
    return this.productos;
  }


}
