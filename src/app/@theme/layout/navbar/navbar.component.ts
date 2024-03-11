import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '@interfaces/user.interface';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	date = new Date();
	user: User = {
		firstName: 'Jade',
		lastName: 'P',
		avatar: {
      url: './assets/images/face-5.jpg'
		}
	};
	@Output() byToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(
		private _modalService: BsModalService,
		private _authService: AuthService
	) { }

	toggleSidebar() {
		this.byToggle.emit(true);
	}
  openModal() {
    this._modalService.show(ChangePasswordComponent, {
      initialState: {},
      class: 'modal-dialog-centered',
    });
  }
	logout(){
		this._authService.logout()
}
}
