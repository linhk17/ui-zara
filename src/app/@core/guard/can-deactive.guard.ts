import { CanDeactivateFn, UrlTree } from '@angular/router';
import { ToastConfirm } from '@utils/toast';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

export const PendingChangesGuard: CanDeactivateFn<ComponentCanDeactivate> = (
  component: ComponentCanDeactivate
) => {
    return component.canDeactivate()
      ? true
      :
        ToastConfirm.fire({
          title: 'You have unsaved changes',
          text: 'Navigate away and lose them?',
          icon: 'info',
          cancelButtonText: 'No',
          confirmButtonText: 'Yes',
        }).then(results => results.isConfirmed)
};