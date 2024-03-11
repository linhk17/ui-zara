import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideCharacterPipe } from './hide-character.pipe';



@NgModule({
  declarations: [
    HideCharacterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HideCharacterPipe
  ]
})
export class HideCharacterModule { }
