import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'crypto-stock',
    pathMatch: 'full',
    loadComponent: () => (import('./components/cryptocurrency-prices/components/crypto-currency-prices.component').then(
      m => m.CryptoCurrencyPricesComponent,
    )),
  },
];
