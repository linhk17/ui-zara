import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileDragComponent } from './upload-file-drag.component';
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [ UploadFileDragComponent],
  imports: [
    CommonModule,
    NgxFileDropModule
  ],
  exports: [
    UploadFileDragComponent
  ]
})
export class UploadFileDragModule { }
