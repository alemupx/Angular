import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sunglasses } from '../../../services/sunglasses.service';



export interface DialogData {
  cantidad: number;
  objeto: Sunglasses;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  cantidad;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, ) { }

  ngOnInit(): void {
    this.cantidad = this.data.cantidad;
  }

  operar(operacion: string) {
    if (operacion === '+') {
      this.data.cantidad++;
    }

    if (operacion === '-') {
      if (this.data.cantidad <= 1) {
        return;
      }
      this.data.cantidad--;

    }
  }

  // onClose(): void {
  //   console.log('Siu');
  //   console.log(this.data);
  //   this.dialogRef.close();
  // }



}
