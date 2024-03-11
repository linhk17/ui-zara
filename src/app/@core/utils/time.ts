import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FORMAT_TIME_MODEL } from '@constant/index';
dayjs.extend(utc);
dayjs.extend(relativeTime);

export function getTimezoneOffset() {
	return new Date().getTimezoneOffset() / -60;
}

export function convertToLocal(time: any, format: string = FORMAT_TIME_MODEL) {
	return time ? dayjs.utc(time).local().format(format) : null;
}

export function convertTimeToUTC(datetime: string) {
	return datetime ? dayjs(datetime).utc().format() + '' : null;
}
