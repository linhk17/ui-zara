import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

@Pipe({
	name: 'mediaLink',
	pure: false
})
export class MediaLinkPipe implements PipeTransform {
	transform(value: string, isAvatarUser?: boolean): string {
		if (!value && !isAvatarUser) {
			return 'assets/images/digidoc.svg';
		}
		const s3_api_media = environment.S3_API_MEDIA;
		return `${s3_api_media}/${value}`;
	}
}
