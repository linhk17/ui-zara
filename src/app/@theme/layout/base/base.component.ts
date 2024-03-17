import { Component, OnInit, OnDestroy } from '@angular/core';
import { DEFAULT_SIDEBAR_STATE, SCREEN_SIZE } from '@constant/index';
import { Role } from '@enum/role.enum';
import { User } from '@interfaces/user.interface';
import { SidebarService, ScreenSizeService, AuthService } from '@services/index';
import { Subscription, iif } from 'rxjs';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
	subscriber = new Subscription();
	isOpenSidebar: boolean = DEFAULT_SIDEBAR_STATE;
	isSmallScreen: boolean = false;

	classes = ['blur', 'shadow-blur', 'left-auto'];
	toggleClasses = ['shadow-none'];

	constructor(
		private _sidebarService: SidebarService,
		private _sizeService: ScreenSizeService,
		private _authService: AuthService
	) { }

	ngOnInit() {
		// need to call api to get user profile
		// this._authService.getProfile().subscribe();
	}

	subscribeSidebar() {
		this.subscriber.add(this._sidebarService.isOpen.subscribe(data => {
			this.isOpenSidebar = data;
		}));
		this.subscriber.add(this._sizeService.onResize$.subscribe(data => {
			if (data <= SCREEN_SIZE.XL) {
				this._sidebarService.closeSidebar();
				this.isSmallScreen = true;
			}
		}));
	}

	toggleSidebar() {
		this._sidebarService.toggleSidebar();
	}

	ngOnDestroy() {
		this.subscriber.unsubscribe();
	}
}
