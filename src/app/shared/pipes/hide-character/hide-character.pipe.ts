import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideCharacter'
})
export class HideCharacterPipe implements PipeTransform {

  transform(value?: string, type?: string, hide?: boolean): any {
    if(!value){
      return '';
    }
    if(hide){
      switch(type) {
        case 'email':
          value = value.replace(/(\w{1})[\w.-]+@([\w.]+\w)/, "$1***@****com");
          break;
        case 'phone':
          value = value.slice(-3).padStart(value.length, '*');
          break;
      }
    }
    return value;
  }
}
