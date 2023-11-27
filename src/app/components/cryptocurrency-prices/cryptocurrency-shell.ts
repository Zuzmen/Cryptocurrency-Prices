import {Injectable} from "@angular/core";
import {filter, Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {CryptoActions} from "./store/actions";
import {getTcpData} from "./store/reducers/crypto.reducer";
// import {selectTcpData} from "./store/selector/crypto.selector";



@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyShell {
  // readonly tcpData$: Observable<any> = this.store.pipe(
  //   select(selectTcpData),
  //   filter(value => !!value),
  // );

  constructor(
    private readonly store: Store<any>,
  ) {}

  loadTcpData(): void {
    this.store.dispatch(
      CryptoActions.loadTcpDataOptions(),
    );
  }
}
