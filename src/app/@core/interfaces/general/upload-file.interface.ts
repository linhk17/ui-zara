
export interface UploadPolicy{
  fileName: string;
  objectType: 'device' | 'service' | 'promotion' | 'job' | 'avatar' | 'category';
}

export interface UploadFileRequest {
  signedUrl?: string;
  file?: File;
  objectType?: 'device' | 'service' | 'promotion' | 'job' | 'avatar' | 'category'
}