import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  estaSobre: boolean;
  contador = 0;

  constructor() { }

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();


  @HostListener('click', ['$event'])
  public onClick(event: any) {

    if (this.contador >= 1) {
      this.contador = 0;
      this.mouseSobre.emit(false);
      return;
    }

    this.mouseSobre.emit(true);
    this.estaSobre = false;
    this.contador++;
  }


}

