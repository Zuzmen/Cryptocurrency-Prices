import {ICellRendererParams} from 'ag-grid-community';

export const COLUMNS_DEF = [
  {
    headerName: '',
    field: '',
    initialWidth: 60,
    cellRenderer: (params: ICellRendererParams) => {
      return `<button mat-button class="fav-button"><mat-icon class="mat-icon material-icons mat-icon-no-color icon-star" role="img" aria-hidden="true">
       star_border</mat-icon></button>`;
    }
  },
  {
    headerName: '#',
    field: '',
    initialWidth: 60,
    valueGetter: "node.rowIndex + 1"
  },
  {
    headerName: 'Name',
    field: 'name',
    initialWidth: 180,
    sortable: true,
    resizable: true,
    cellRenderer: (params: ICellRendererParams) => {
      let url = "../../../assets/color/" + params.data.symbol.toLowerCase() + ".svg";
      return `<div class="crypto-cell"><img class="crypto-cell-icon" src=${url}> ${params.data.name} ${params.data.symbol}</div>`;
    },
  },
  {
    headerName: 'Price',
    field: 'quotes.USD.price',
    initialWidth: 130,
    sortable: true,
    resizable: true,
    cellRenderer: (params: ICellRendererParams) => {
      let price = Math.round(params.data.quotes.USD.price * 100) / 100;
      return `<div>$ ${price}</div>`;
    }
  },
  {
    headerName: '1h%',
    field: 'quotes.USD.percent_change_1h',
    initialWidth: 100,
    sortable: true,
    resizable: true,
  },
  {
    headerName: '24h%',
    field: 'quotes.USD.percent_change_24h',
    initialWidth: 100,
    sortable: true,
    resizable: true,
  },
  {
    headerName: '7d%',
    field: 'quotes.USD.percent_change_7d',
    initialWidth: 100,
    sortable: true,
    resizable: true,
  },
  {
    headerName: 'Market Cap',
    field: 'quotes.USD.market_cap',
    initialWidth: 120,
    sortable: true,
    resizable: true,
  },
  {
    headerName: 'Volume (24h)',
    field: 'quotes.USD.volume_24h',
    initialWidth: 120,
    sortable: true,
    resizable: true,
  },
  {
    headerName: 'Circulating Supply',
    field: 'circulating_supply',
    initialWidth: 150,
    sortable: true,
    resizable: true,
  },
];
