import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { ColumnMode,SortType,SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersTableComponent implements OnInit {

  @ViewChild('ordersTable') table: any;

  ColumnMode = ColumnMode;
  SortType = SortType;
  SelectionType = SelectionType;

  funder = [];
  calculated = [];
  pending = [];
  groups = [];
  selected = [];

  editing = {};
  rows = [];

  columns = [
    {prop: 'requestedStartDateVc' }, 
    { name: 'orderMnemonic' }, 
    { name: 'orderingProvider' }
  ];
  
  constructor(
    public futureOrderDS: FutureorderService

  ) { }

  ngOnInit(): void {
    
  }

  toggleExpandGroup(group: any) {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader.toggleExpandGroup(group);
  }

  onDetailToggle(event: any) {
    console.log('Detail Toggled', event);
  }

}