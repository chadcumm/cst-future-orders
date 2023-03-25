import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { GroupSettingsModel,FilterSettingsModel,PageSettingsModel } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class OrdersTableComponent implements OnInit {

  constructor(
    public futureOrderDS: FutureorderService
  ) { }

  groupOptions!: GroupSettingsModel;
  public filterOptions!: FilterSettingsModel;
  public pageSettings!: PageSettingsModel;

  ngOnInit(): void {
    this.groupOptions = { columns: ['requestedStartDateVc'] };
    this.filterOptions = {
      type: 'Excel'
   };
   this.pageSettings = { pageSize: 20 };
  }

}