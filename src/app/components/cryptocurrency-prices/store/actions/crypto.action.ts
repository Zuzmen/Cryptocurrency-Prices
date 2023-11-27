import {createAction, props} from "@ngrx/store";
import {PeriodicElement} from "../../components/crypto-currency-prices.component";

export interface HttpError {
  message: string;
  status: number;
  statusText: string;
  ok?: boolean;
  type?: string;
}

export const loadTcpDataOptions = createAction(
  '[Admin] Load tcp options',
);

export const loadTcpDataOptionsSuccess = createAction(
  '[Admin] Load tcp options success',
  props<{ tcpData: PeriodicElement[] }>(),
);

export const loadTcpDataOptionsFailure = createAction(
  '[Admin] Load tcp options failure',
  props<{ error: HttpError }>(),
);
