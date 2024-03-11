import {
	Directive,
	Input,
	TemplateRef,
	ViewContainerRef,
	ElementRef,
	OnInit
} from '@angular/core';
import { User } from '@interfaces/user.interface';
import { AuthService } from '@services/index';

@Directive({
	selector: '[appIsGranted]'
})
export class IsGrantedDirective implements OnInit {

	private currentUser!: User;
	private permissions: any;
	private logicalOp: 'AND' | 'OR' = 'OR';
	private isHidden = true;

	constructor(
		private element: ElementRef,
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
		private _authService: AuthService
	) { }

	ngOnInit() {
		this._authService.user$.subscribe(data => {
			if (data) {
				this.currentUser = data;
			}
			this.updateView();
		});
	}

	@Input()
	set appIsGranted(val: any) {
		this.permissions = val || [];
		this.updateView();
	}

	@Input()
	set appIsGrantedOp(permop: any) {
		this.logicalOp = permop;
		this.updateView();
	}

	private updateView() {
		if (this.checkPermission()) {
			if (this.isHidden) {
				this.viewContainer.createEmbeddedView(this.templateRef);
				this.isHidden = false;
			}
		} else {
			this.isHidden = true;
			this.viewContainer.clear();
		}
	}

	private checkPermission() {
		let hasPermission = false;
		if(this.currentUser){
			if(this.currentUser.isAdmin && this.permissions.isAdmin){
				hasPermission = true;
			}
			if(this.currentUser.isEmployee && this.permissions.isEmployee){
				hasPermission = true;
			}
		}
		else {
				hasPermission = false;
		}
		
		// if (this.currentUser && this.currentUser.permissions) {
		// 	for (const checkPermission of this.permissions) {
		// 		const permissionFound = this.currentUser.permissions.find(x => x.code.toUpperCase() === checkPermission.toUpperCase() && x.isGranted);
		// 		if (permissionFound) {
		// 			hasPermission = true;
		// 			if (this.logicalOp === 'OR') {
		// 				break;
		// 			}
		// 		} else {
		// 			hasPermission = false;
		// 			if (this.logicalOp === 'AND') {
		// 				break;
		// 			}
		// 		}
		// 	}
		// }
		return hasPermission;
	}

}
