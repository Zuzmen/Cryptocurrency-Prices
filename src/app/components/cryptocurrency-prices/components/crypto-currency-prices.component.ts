import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {COLUMNS_DEF} from "../columns-defs";
import {ApiService} from "../../../services/api.service";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AgGridModule} from "ag-grid-angular";
import {ColDef, CellClickedEvent} from 'ag-grid-community';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DialogDetailsComponent} from "../../dialog-details/dialog-details.component";
import {Subject, takeUntil} from "rxjs";
import {CryptocurrencyShell} from "../cryptocurrency-shell";

export interface PeriodicElement {
  id: string,
  name: string,
  quotes: {
    USD: {
      price: number,
      percent_change_1h: number,
      percent_change_24h: number,
      percent_change_7d: number,
      market_cap: number,
      volume_24h: number,
    }
  }
  circulating_supply: number,
  rank: number,
  symbol: string,
  total_supply: number,
}

@Component({
  selector: 'crypto-currency-prices',
  templateUrl: './crypto-currency-prices.component.html',
  styleUrls: ['./crypto-currency-prices.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatIconModule,
    NgForOf,
    HttpClientModule,
    MatCheckboxModule,
    NgIf,
    CommonModule,
    AgGridModule,
    MatDialogModule,
  ]
})
export class CryptoCurrencyPricesComponent implements OnInit, OnDestroy {
  public columnDefs: ColDef[];
  public rowData: PeriodicElement[] = [];
  public mainTitle: string = 'Today\'s Cryptocurrency Prices';

  private readonly onDestroy = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    protected cryptoShell: CryptocurrencyShell,
  ) {
    this.columnDefs = COLUMNS_DEF;
    this.getAllTableItems();
  }

  ngOnInit() {
    this.cryptoShell.loadTcpData();
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  public onCellClicked(event: CellClickedEvent<PeriodicElement>) {
    if (event.colDef.headerName !== '') {
      this.openDetailDialog(event.data);
    }
  }

  private openDetailDialog(row?: PeriodicElement) {
    this.dialog.open(DialogDetailsComponent, {
      width: '45%',
      data: row
    })
  }

  private getAllTableItems(): void {
    this.apiService.getTcpData().pipe(
      takeUntil(this.onDestroy),
    ).subscribe((data: PeriodicElement[]) => {
        this.rowData = data;
      })
  }
}
