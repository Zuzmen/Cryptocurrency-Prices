import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router, CanActivate,
} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegisteredGuard implements CanActivate {
  constructor(
    private readonly router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<boolean> {
    return of(true);
  }
}
