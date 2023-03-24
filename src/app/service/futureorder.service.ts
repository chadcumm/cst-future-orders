import { Injectable } from '@angular/core';
import { CustomService } from '@clinicaloffice/clinical-office-mpage';

@Injectable({
  providedIn: 'root'
})
export class FutureorderService {

  public FutureOrdersLoading: boolean = false;

  constructor(private futureOrderService: CustomService) { }

  public loadFutureOrders(): void{
    this.FutureOrdersLoading = true;
   
    this.futureOrderService.load({
      customScript: {
        script: [
          {
            name: '1bc_all_future_orders:group1',
            run: 'pre',
            id: 'futureorders'
          }
        ]
      }
    }, undefined, (() => { this.FutureOrdersLoading = false }));
  }

  //Returns Orders Data
  public get futureOrders(): any[]  {
    return this.futureOrderService.get('futureorders').orderList
  }

  // Determine if Future Ordres have been loaded
  public get futureOrdersLoaded(): boolean {
    return this.futureOrderService.isLoaded('futureorders');
  }
}
