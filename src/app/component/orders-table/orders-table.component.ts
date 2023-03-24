import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent
        , ColDef
        , GridReadyEvent
        , RowGroupingDisplayType
        , CheckboxSelectionCallbackParams
        , IGroupCellRenderer} from 'ag-grid-community';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersTableComponent implements OnInit {
  public columnDefs: ColDef[] = [
    { 
        field: 'requestedStartDateVc', 
        headerName: 'Est Collection Date',
        rowGroup: true, 
        hide: true
    },
    { 
        field: 'orderMnemonic',
        headerName: 'Order Mnemonic',
    },
    { field: 'origOrderDateVc'},
    { field: 'orderingProvider'},
    { field: 'orderDetails'}
  ];
 
  public agColDef: ColDef = {
    headerName: 'Est Collection Date',
    field: 'requestedStartDateVc',
    minWidth: 220,
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      suppressCount: false,
      checkbox: true,
    },
  };
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    minWidth: 300
  };

  public gDisplayType: RowGroupingDisplayType = 'singleColumn';

  
  constructor(
    public futureOrderDS: FutureorderService
  ) { }

  ngOnInit(): void {
    
  }

}