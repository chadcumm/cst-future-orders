import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';

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

  ngOnInit(): void {
    
  }

}