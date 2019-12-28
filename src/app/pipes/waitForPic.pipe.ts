import { Pipe, PipeTransform } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Pipe({
    name: "waitPic"
})
export class WaitForPic implements PipeTransform {

    constructor(private almacenamiento: AngularFireStorage) { }

    transform(file: any): string {
        let foo: string = '';
        const id = Math.random().toString(36).substring(2);
        const filePath = `gafasTarjetas/${id}`;
        const ref = this.almacenamiento.ref(filePath);
        const task = this.almacenamiento.upload(filePath, file);
        console.log(task);
        task
            .snapshotChanges()
            .pipe(
                finalize(() => {
                    ref.getDownloadURL().subscribe(downloadURL => {
                        console.log(downloadURL);
                        foo = downloadURL;
                    });
                })
            )
            .subscribe();
        return foo;
    }
}