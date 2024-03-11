import { PhoneNumberUtil } from 'google-libphonenumber';

export function formatPhone(value: string) {
	const phoneUtil = PhoneNumberUtil.getInstance();
	try {
		const number = phoneUtil.parse(value, null);
		const countryCode = number.getCountryCode();
		const nationalNumber = number.getNationalNumber().toString();
		if (nationalNumber) {
			return '+' + countryCode + nationalNumber;
		}
	} catch (error) {
	}
	return;
}
