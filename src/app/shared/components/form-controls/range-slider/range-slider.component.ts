import { Options } from '@angular-slider/ngx-slider';
import { Component, Injector, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RangeSliderComponent),
			multi: true,
		},
	],
})
export class RangeSliderComponent extends ControlValueAccessorConnector {
  @Input() minValue!: number;
  @Input() maxValue!: number;
  @Input() configOptionsRangeValue!: Options;
  @Input() customError?: ErrorMessage[];
  @Input() errorLabel!: string;
  @Input() submitted!: boolean;

  constructor(injector: Injector) {
		super(injector);
	}
}
