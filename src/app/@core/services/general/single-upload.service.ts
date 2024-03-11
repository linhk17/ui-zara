import { Injectable } from '@angular/core';
import { EndpointService } from '..';
import { UploadFileRequest, UploadPolicy } from '@interfaces/general/upload-file.interface';
import { ENDPOINT } from '@constant/endpoint.constant';
import { Observable, concatMap, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SingleUploadService {
  constructor(
    private _service: EndpointService
  ) {}

  getSignedUrl(body: UploadPolicy){
    return this._service.sendPost({
      resource: ENDPOINT.UPLOAD,
      body
    });
  }

  uploadFileToSignedUrl(body: UploadFileRequest){
    return this._service.sendFile({
      resource: body.signedUrl!,
      noEndpoint: true,
      body: body.file,
      skipToken: 'true'
    })
  }

  singleUploadFile(body: UploadFileRequest){
   return this.getSignedUrl({
      fileName: body.file!.name,
      objectType: body.objectType!
    })
    .pipe(
      concatMap((signedUrlResult) => {
        return this.uploadFileToSignedUrl({
          file: body.file,
          signedUrl: signedUrlResult.url,
        }).pipe(map(res => signedUrlResult));
      })
    )
  }
}