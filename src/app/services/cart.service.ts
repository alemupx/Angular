import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cantidad;

  constructor() {
    this.cantidad = 0;
  }

  public operar(valor: number, operacion: boolean): void {
    if (operacion) {
      this.cantidad = this.cantidad + valor;
    } else {
      this.cantidad = this.cantidad - valor;
    }
  }

  getCantidad(): number {
    return this.cantidad;
  }


}
