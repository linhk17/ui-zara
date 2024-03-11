import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

@Pipe({
	name: 'datetime',
	pure: false
})
export class DatetimePipe implements PipeTransform {

	/**
	 * convert datetime from utc to localtime
	 * @param datetime datetime need to convert from utc to localtime
	 * @returns localtime
	 */
	transform(value: any, format?: any): any {
		if (!value) {
			return '';
		}
		return dayjs.utc(value).local().format(format || 'DD-MM-YYYY HH:mm:ss ');
	}

}
