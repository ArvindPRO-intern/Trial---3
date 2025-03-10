import { CanActivateFn } from '@angular/router';

export const claimsGuard: CanActivateFn = (route, state) => {
  return true;
};