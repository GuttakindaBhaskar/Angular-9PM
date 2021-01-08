import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    //value ===>  Angular11
    //args[0]   ====>  to
    //args[1]   ====> Welcome
    return `${args[1]} ${args[0]} ${value}`;
  }

}
