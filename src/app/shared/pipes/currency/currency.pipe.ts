import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'currencyPipe',
	pure: false
})
export class CurrencyPipe implements PipeTransform {

	transform(
    value: number,
    currencyCode: string = 'USD',
    display:
    |
    'code' |
    'symbol' |
    'symbol-narrow' |
    string |
    boolean = 'symbol',
    digitsInfo: string = '1.2-2',
    locale: string = 'en-US',
  ): string | null {
    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, 'wide'),
      currencyCode,
      digitsInfo,
    );
  }
}
