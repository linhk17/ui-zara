import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import customBuild from './ckCustomBuild/build/ckeditor';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';

export class UploadAdapter {
	private loader;
	private key: string = '';
	constructor(loader: any) {
		this.loader = loader;
	}

	async upload() {
	}
}

@Component({
	selector: 'app-ckeditor',
	templateUrl: './ckeditor.component.html',
	styleUrls: ['./ckeditor.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CkeditorComponent),
			multi: true,
		},
	],
})
export class CkeditorComponent extends ControlValueAccessorConnector {

	@Input() submitted!: boolean;
	@Input() placeHolder: string = '';
	@Input() className: string = '';
	@Input() name!: string;
	@Input() errorLabel!: string;
	@Input() isDisabled: boolean = false;
	@Input() customError?: ErrorMessage[];
	@Input() config = {
		placeholder: '',
		toolbar: {
			items: [
				'heading', '|',
				'fontsize',
				'alignment',
				'fontColor', 'fontBackgroundColor', '|',
				'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
				'link', '|',
				'outdent', 'indent', '|',
				'bulletedList', 'numberedList', 'todoList', '|',
				// 'code', 'codeBlock', '|',
				'insertTable', '|',
				'imageUpload', 'blockQuote', '|',
				'todoList',
				'undo', 'redo',
			],
			shouldNotGroupWhenFull: true,

		},
		image: {
			// Configure the available styles.
			styles: [
				'alignLeft', 'alignCenter', 'alignRight'
			],

			// Configure the available image resize options.
			resizeOptions: [
				{
					name: 'resizeImage:original',
					label: 'Original',
					value: null
				},
				{
					name: 'resizeImage:50',
					label: '25%',
					value: '25'
				},
				{
					name: 'resizeImage:50',
					label: '50%',
					value: '50'
				},
				{
					name: 'resizeImage:75',
					label: '75%',
					value: '75'
				}
			],

			// You need to configure the image toolbar, too, so it shows the new style
			// buttons as well as the resize buttons.
			toolbar: [
				'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
				'|',
				'ImageResize',
				'|',
				'imageTextAlternative'
			]
		},
		language: 'en'
	};

	Editor = customBuild;
	file!: File;

	constructor(injector: Injector) {
		super(injector);
	}

	ngOnInit() {
		this.config = { ...this.config, placeholder: this.placeHolder };
	}

	onReady(editor: any) {
		// if (editor.model.schema.isRegistered('image')) {
		// 	editor.model.schema.extend('image', { allowAttributes: 'blockIndent' });
		// }
		// editor.plugins.get('FileRepository').createUploadAdapter = (
		// 	loader: any
		// ) => {
		// 	return new UploadAdapter(loader, this._uploadService);
		// };
	}

}
