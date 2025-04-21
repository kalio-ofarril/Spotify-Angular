import { inject} from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

export const sessionGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).canActivate();
};
