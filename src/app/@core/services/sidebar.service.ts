import { Injectable } from '@angular/core';
import { DEFAULT_SIDEBAR_STATE } from '@constant/index';
import { BehaviorSubject } from 'rxjs';
import { ScreenSizeService } from './screen-size.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(DEFAULT_SIDEBAR_STATE);
  public isOpen = this.isOpen$.asObservable();

  constructor(
    private _screenSizeService: ScreenSizeService
  ) {
  }

  toggleSidebar() {
    this.isOpen$.next(!this.isOpen$.value);
  }

  openSidebar() {
    this.isOpen$.next(true);
  }

  closeSidebar() {
    this.isOpen$.next(false);
  }

}
