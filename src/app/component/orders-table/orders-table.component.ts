import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersTableComponent implements OnInit {
  public columnDefs: ColDef[] = [
    { field: 'orderMnemonic'},
    { field: 'origOrderDate'},
    { field: 'requestedStartDate' },
    { field: 'orderingProvider'},
    { field: 'orderDetails'}
  ];
 
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  constructor(
    public futureOrderDS: FutureorderService
  ) { }

  ngOnInit(): void {
    
  }

}