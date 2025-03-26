import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { userService } from '../services/user.service';

export const userLoggedGuard: CanActivateFn = (route, state) => {
  const userServise = inject(userService);
  const router = inject(Router)
  const loggedCustommer = userServise.loggedUser();
  if (!loggedCustommer) {
    router.navigateByUrl('/login')
  }
  console.log(!!loggedCustommer)
  return !!loggedCustommer;
};
