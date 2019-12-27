import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "waitPic"
})
export class WaitForPic implements PipeTransform {
    transform(title:string,src: string,): string {
        let foo = 'Titulo: '+title;
                
        return foo;
    }
}