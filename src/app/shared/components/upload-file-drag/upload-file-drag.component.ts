import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMAGE_FILE_EXTENSIONS, MAX_SIZE } from '@constant/file.constant';
import { formatMBytes } from '@utils/format-bytes';
import { Toast } from '@utils/toast';
import {
  NgxFileDropEntry,
  FileSystemFileEntry
} from 'ngx-file-drop';
@Component({
  selector: 'app-upload-file-drag',
  templateUrl: './upload-file-drag.component.html',
  styleUrls: ['./upload-file-drag.component.scss'],
})
export class UploadFileDragComponent {
  @Input() className: string = '';
  @Input() contentClassName: string = '';
  @Input() errorLabel: string = '';
  @Input() submitted: boolean = false;
  @Output() uploadImage = new EventEmitter();
  imageSrc: any;
  public files: NgxFileDropEntry[] = [];
  uploadedDocuments: any;
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile && this.isFileAllowed(droppedFile.fileEntry.name)) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const max_size = MAX_SIZE;
          const max_size_convert = formatMBytes();
          if (file.size > max_size) {
            this.showToastr('error', `File size exceeds maximum limit ${max_size_convert}.`);
            return false;
          }
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.imageSrc = e.target.result;
            this.uploadAvatar(this.imageSrc, file);
          };
          reader.readAsDataURL(file);
        });
      } else {
        this.showToastr('error', 'File type not allowed');
        return false
      }
    }
  }
  uploadAvatar(imageSrc: any, file: any) {
    this.uploadedDocuments = {
      key: imageSrc,
      fileSize: file.size,
      fileName: file.name.replace(/ /g, '_'),
      file: file
    };
    this.uploadImage.emit(this.uploadedDocuments);
  }
  isFileAllowed(fileName: string) {
    let isFileAllowed = false;
    const allowedFiles = IMAGE_FILE_EXTENSIONS;
    const regex = /(?:\.([^.]+))?$/;
    const extension = regex.exec(fileName);
    if (extension) {
        for (const ext of allowedFiles) {
            if (ext === extension[0]) {
                isFileAllowed = true;
            }
        }
    }
    return isFileAllowed;
}
  public fileOver(event: any) {
    console.log(event);
  }
  public fileLeave(event: any) {
    console.log(event);
  }
  showToastr(type: any, title: string) {
    Toast.fire({
      title: title,
      icon: type,
      customClass: {
        container: 'toast-custom-container',
        popup: 'toast-custom swal2-icon-' + type,
      },
    });
  }
}