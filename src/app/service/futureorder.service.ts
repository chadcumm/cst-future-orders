import { Injectable } from '@angular/core';
import { CustomService } from '@clinicaloffice/clinical-office-mpage';
import * as ordersjsonData from '../../assets/futureorders.json';

@Injectable({
  providedIn: 'root'
})
export class FutureorderService {

  public FutureOrdersLoading: boolean = false;
  public LastRefesh: string = "";
  public refresh = false;
  public isLoaded = false;

  constructor(
      private futureOrderService: CustomService
      
      ) { }

  public loadFutureOrders(lookback?:string, lookforward?:string): void{
    this.FutureOrdersLoading = true;
    this.isLoaded = false;

    console.log(`loadFutureOrders: ${lookback} and ${lookforward}`)
    this.futureOrderService.load({
      customScript: {
        script: [
          {
            name: '3bc_all_future_orders:group1',
            run: 'pre',
            id: 'futureorders',
            parameters: {
              'lookback': lookback,
              'lookforward': lookforward
            }
          }
        ]
      }
    }, undefined, (() => { 
      this.FutureOrdersLoading = false 
      this.LastRefesh = this.futureOrderService.get('futureorders').lastrefesh
      this.refresh = true;
      this.isLoaded = true;
    }));
  }

  //Returns Provider Data
  public get providerList(): any[]  {
    //console.log(this.futureOrderService.get('futureorders'))
    return this.futureOrderService.get('futureorders').providerList
    //return(this.orderJSON[0].orderList)
  }

  //Returns Ordering Location Data
  public get orderingList(): any[]  {
      //console.log(this.futureOrderService.get('futureorders'))
      return this.futureOrderService.get('futureorders').ordLocationList
      //return(this.orderJSON[0].orderList)
  }

  //Returns Orders Data
  public get futureOrders(): any[]  {
    //console.log(this.futureOrderService.get('futureorders'))
    return this.futureOrderService.get('futureorders').orderList
    //return(this.orderJSON[0].orderList)
  }

  // Determine if Future Ordres have been loaded
  public get futureOrdersLoaded(): boolean {
    return this.futureOrderService.isLoaded('futureorders');
    //return this.isLoaded
    //return true;
  }

  //Returns Orders Data
  public get orderCounts(): any[]  {
    //console.log(this.futureOrderService.get('futureorders'))
    return this.futureOrderService.get('futureorders').counts
    //return(this.orderJSON[0].orderList)
  }
}
