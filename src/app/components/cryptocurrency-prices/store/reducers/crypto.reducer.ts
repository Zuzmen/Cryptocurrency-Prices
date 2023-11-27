import {Action, createReducer, on} from "@ngrx/store";
import {CryptoActions} from "../actions";

export const initialState: any = {
  tcpData: {},
  error: null,
};

// export const reducer = createReducer<any, Action>(
  // on(
  //   CryptoActions.loadTcpDataOptionsSuccess,
  //   (state, { tcpData }) => ({
  //     ...state,
  //     tcpData: { tcpData: tcpData },
  //   }),
  // ),

  // on(
  //   CryptoActions.loadTcpDataOptionsFailure,
  //   (state, error) => ({
  //     ...state,
  //     tcpData: initialState.tcpData,
  //     error,
  //   }),
  // ),
// )

export const getTcpData = (state: any) => state.tcpData;
