import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { AgGridAngular } from 'ag-grid-angular';
import { mPageService } from '@clinicaloffice/clinical-office-mpage';
import { CellClickedEvent
        , ColDef
        , GridApi
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
        floatingFilter: true,
        filter: 'agTextColumnFilter'
    },
    { 
        field: 'origOrderDateVc',
        headerName: 'Order Date'
    },
    { 
        field: 'orderingProvider',
        headerName: 'Provider'
    },
    { 
        field: 'orderDetails',
        headerName: 'Details'
    }
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
    //minWidth: 300
  };

  public gDisplayType: RowGroupingDisplayType = 'singleColumn';

  private gridAPI!: GridApi
  expandAll() {
    this.gridAPI.expandAll();
    this.mpService.putLog("expandAll Clicked")
  }

  collapseAll() {
    this.gridAPI.collapseAll();
    this.mpService.putLog("collapseAll Clicked")
  }

  onGridReady(params: GridReadyEvent) {
    this.gridAPI= params.api;
  }

  constructor(
    public futureOrderDS: FutureorderService,
    public mpService: mPageService
  ) { }

  ngOnInit(): void {
    
  }

}