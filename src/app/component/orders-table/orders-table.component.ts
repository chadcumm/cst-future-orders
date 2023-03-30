import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { TreeNode } from 'primeng/api';

interface Specimens {
  label: string,
  value: string 
}

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
  })


export class OrdersTableComponent implements OnInit {
  cols!: any[];

  specimens: Specimens[] = [];

  selectedSpecimen!: Specimens

  files!: TreeNode[];
  constructor(
    public futureOrderDS: FutureorderService
  ) { 

    this.specimens = [
      {label: "Blood", value:"Blood"},
      {label: "Non-Blood", value:"nonblood"},
      {label: "All", value: ""}
    ]

    this.cols = [
      { field: 'requestedStartDateVc', header: 'Est Collection Date' },
      { field: 'orderMnemonic', header: 'Order' },
      { field: 'orderingProvider', header: 'Provider' },
      { field: 'orderingLocation', header: 'Ordering Location' },
      { field: 'origOrderDateVc', header: 'Order Date' },
      { field: 'orderDetails', header: 'Details' },
    ];
  }

  ngOnInit(): void {
    
    
  }

  
  logChange($event:any) :void {
    console.log($event.value.value) 
  } 

  toggleVisibility(isChecked: boolean)
{
console.log(isChecked);
}

}