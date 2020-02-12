import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[toggleClickDirective]'
})
export class ToggleClickDirective {

  contador = 0;

  constructor() { }

  @Output() emisorEvento: EventEmitter<boolean> = new EventEmitter();

  @HostListener('click', ['$event'])
  public onClick(event: any) {

    console.log('click');

    if (this.contador >= 1) {
      this.contador = 0;
      this.emisorEvento.emit(false);
      return;
    }

    this.emisorEvento.emit(true);
    this.contador++;
  }


}

