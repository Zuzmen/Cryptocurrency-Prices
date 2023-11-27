import {Actions, createEffect, ofType, OnInitEffects} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, exhaustMap, map, Observable, of, switchMap} from "rxjs";
import {CryptoActions} from "../actions";
import {ApiService} from "../../../../services/api.service";
import {Action} from "@ngrx/store";


@Injectable()
export class TcpDataEffect implements OnInitEffects {
  // readonly loadTcpDataOptions$: Observable<unknown> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CryptoActions.loadTcpDataOptions),
  //     switchMap(() =>
  //       this.apiService.getTcpData().pipe(
  //         map(tcpData =>
  //           CryptoActions.loadTcpDataOptionsSuccess({
  //             tcpData
  //           }),
  //         ),
  //         catchError((caughtError: unknown) => {
  //           if (caughtError) {
  //             return of(
  //               CryptoActions.loadTcpDataOptionsFailure({
  //                 error: caughtError,
  //               }),
  //             );
  //           }
  //         }),
  //       ),
  //     ),
  //   ),
  // );

  constructor(
    private readonly actions$: Actions,
    private apiService: ApiService,
  ) {}

  ngrxOnInitEffects(): Action {
    return CryptoActions.loadTcpDataOptions();
  }
}
