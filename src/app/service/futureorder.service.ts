import { Injectable } from '@angular/core';
import { CustomService } from '@clinicaloffice/clinical-office-mpage';
import * as ordersjsonData from '../../assets/futureorders.json';

@Injectable({
  providedIn: 'root'
})
export class FutureorderService {

  public FutureOrdersLoading: boolean = false;
  
  constructor(
      private futureOrderService: CustomService
      
      ) { }

  public loadFutureOrders(): void{
    this.FutureOrdersLoading = true;
   
    this.futureOrderService.load({
      customScript: {
        script: [
          {
            name: 'bc_all_future_orders:group1',
            run: 'pre',
            id: 'futureorders'
          }
        ]
      }
    }, undefined, (() => { this.FutureOrdersLoading = false }));
  }

  //Returns Orders Data
  public get futureOrders(): any[]  {
    //return this.futureOrderService.get('futureorders').orderList
    return(this.orderJSON[0].orderList)
  }

  // Determine if Future Ordres have been loaded
  public get futureOrdersLoaded(): boolean {
    //return this.futureOrderService.isLoaded('futureorders');
    return true; 
  }


  public orderJSON = [
    {
      "orderCnt": 28,
      "orderList": [
        {
          "orderId": 789269261,
          "orderMnemonic": "Chloride Sweat",
          "origOrderDate": "2021-08-05T00:30:16.000+00:00",
          "origOrderDateVc": "04-AUG-2021",
          "requestedStartDate": "2021-08-05T00:30:00.000+00:00",
          "requestedStartDateVc": "04-AUG-2021",
          "orderingProvider": "PLISBVCA, ROCCO, NP",
          "orderDetails": "Sweat, Routine, Collection: 04-Aug-2021, once, Order for future visit",
          "orderingLocation": "BCH Cystic Fib",
          "specimenType": "Sweat",
          "collectionPriority": "Routine",
          "gracePeriod": "04-AUG-2021 - 04-AUG-2021",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 939119033,
          "orderMnemonic": "Chloride Sweat",
          "origOrderDate": "2022-02-11T02:43:32.000+00:00",
          "origOrderDateVc": "10-FEB-2022",
          "requestedStartDate": "2022-02-11T02:43:00.000+00:00",
          "requestedStartDateVc": "10-FEB-2022",
          "orderingProvider": "PLISBVCU, JESE, MD",
          "orderDetails": "Sweat, Routine, Collection: 10-Feb-2022, once, Order for future visit",
          "orderingLocation": "BCH Cystic Fib",
          "specimenType": "Sweat",
          "collectionPriority": "Routine",
          "gracePeriod": "10-FEB-2022 - 10-FEB-2022",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 939684519,
          "orderMnemonic": "Chloride Sweat",
          "origOrderDate": "2022-02-11T17:38:11.000+00:00",
          "origOrderDateVc": "11-FEB-2022",
          "requestedStartDate": "2022-02-11T17:38:00.000+00:00",
          "requestedStartDateVc": "11-FEB-2022",
          "orderingProvider": "TestOS, GeneralMedicine-Physician5, MD",
          "orderDetails": "Sweat, Routine, Collection: 11-Feb-2022, once, Order for future visit",
          "orderingLocation": "BCH Cystic Fib",
          "specimenType": "Sweat",
          "collectionPriority": "Routine",
          "gracePeriod": "11-FEB-2022 - 11-FEB-2022",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1146295715,
          "orderMnemonic": "Gamma Glutamyl Transferase",
          "origOrderDate": "2022-09-15T19:12:37.000+00:00",
          "origOrderDateVc": "15-SEP-2022",
          "requestedStartDate": "2022-09-15T19:12:00.000+00:00",
          "requestedStartDateVc": "15-SEP-2022",
          "orderingProvider": "TestUser, Respirologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 15-Sep-2022, once, Order for future visit",
          "orderingLocation": "BCH HomeTrchVnt",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "15-SEP-2022 - 15-SEP-2022",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1146295717,
          "orderMnemonic": "INR and PTT Panel",
          "origOrderDate": "2022-09-15T19:12:37.000+00:00",
          "origOrderDateVc": "15-SEP-2022",
          "requestedStartDate": "2022-09-15T19:12:00.000+00:00",
          "requestedStartDateVc": "15-SEP-2022",
          "orderingProvider": "TestUser, Respirologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 15-Sep-2022, once, Order for future visit",
          "orderingLocation": "BCH HomeTrchVnt",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "15-SEP-2022 - 15-SEP-2022",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1348823855,
          "orderMnemonic": "Sodium and Potassium Panel",
          "origOrderDate": "2023-03-06T03:14:59.000+00:00",
          "origOrderDateVc": "05-MAR-2023",
          "requestedStartDate": "2023-03-05T11:00:00.000+00:00",
          "requestedStartDateVc": "05-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, *Est. Collection: 05-Mar-2023 +/- 28 day, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "05-FEB-2023 - 02-APR-2023",
          "hiddenData": {
            "dueStatusFlag": 1,
            "rowClass": "orderDue"
          }
        },
        {
          "orderId": 1350711335,
          "orderMnemonic": "Anti HLA Screening",
          "origOrderDate": "2023-03-07T16:42:13.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711299,
          "orderMnemonic": "Calcium Level",
          "origOrderDate": "2023-03-07T16:42:11.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711291,
          "orderMnemonic": "CBC and Differential",
          "origOrderDate": "2023-03-07T16:42:11.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711315,
          "orderMnemonic": "Cytomegalovirus Antibody IgG BCCDC",
          "origOrderDate": "2023-03-07T16:42:12.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711317,
          "orderMnemonic": "Epstein Barr Virus Antibody IgG",
          "origOrderDate": "2023-03-07T16:42:12.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711319,
          "orderMnemonic": "Hepatitis B Screen BCCDC",
          "origOrderDate": "2023-03-07T16:42:12.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711321,
          "orderMnemonic": "Hepatitis C Antibody BCCDC",
          "origOrderDate": "2023-03-07T16:42:12.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711323,
          "orderMnemonic": "HIV 1/2 Antibody and p24 Antigen BCCDC",
          "origOrderDate": "2023-03-07T16:42:12.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711337,
          "orderMnemonic": "HLA Crossmatch Recipient",
          "origOrderDate": "2023-03-07T16:42:16.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711325,
          "orderMnemonic": "HTLV 1 and 2 Antibody",
          "origOrderDate": "2023-03-07T16:42:12.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711293,
          "orderMnemonic": "INR and PTT Panel",
          "origOrderDate": "2023-03-07T16:42:11.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711301,
          "orderMnemonic": "Magnesium Level",
          "origOrderDate": "2023-03-07T16:42:11.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711331,
          "orderMnemonic": "Measles Virus Antibody IgG",
          "origOrderDate": "2023-03-07T16:42:13.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711329,
          "orderMnemonic": "Mumps Virus Antibody IgG",
          "origOrderDate": "2023-03-07T16:42:12.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711303,
          "orderMnemonic": "Phosphate Level",
          "origOrderDate": "2023-03-07T16:42:12.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711333,
          "orderMnemonic": "Rubella Virus Antibody IgG",
          "origOrderDate": "2023-03-07T16:42:13.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711297,
          "orderMnemonic": "Sodium and Potassium Panel",
          "origOrderDate": "2023-03-07T16:42:11.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711295,
          "orderMnemonic": "Urea and Creatinine Panel",
          "origOrderDate": "2023-03-07T16:42:11.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1350711327,
          "orderMnemonic": "Varicella Zoster Virus Antibody IgG",
          "origOrderDate": "2023-03-07T16:42:12.000+00:00",
          "origOrderDateVc": "07-MAR-2023",
          "requestedStartDate": "2023-03-07T16:42:00.000+00:00",
          "requestedStartDateVc": "07-MAR-2023",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, Collection: 07-Mar-2023, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "07-MAR-2023 - 07-MAR-2023",
          "hiddenData": {
            "dueStatusFlag": 2,
            "rowClass": "orderOverdue"
          }
        },
        {
          "orderId": 1360641421,
          "orderMnemonic": "INR and PTT Panel",
          "origOrderDate": "2023-03-15T21:36:12.000+00:00",
          "origOrderDateVc": "15-MAR-2023",
          "requestedStartDate": "2023-05-12T10:00:00.000+00:00",
          "requestedStartDateVc": "12-MAY-2023",
          "orderingProvider": "Zachary, Christopher Bransby, MD",
          "orderDetails": "Blood, Routine, Unit collect, *Est. Collection: 12-May-2023 +/- 14 day, once, Order for future visit",
          "orderingLocation": "VGH Cath CRU",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "28-APR-2023 - 26-MAY-2023",
          "hiddenData": {
            "dueStatusFlag": 0,
            "rowClass": "orderUpcoming"
          }
        },
        {
          "orderId": 1348823859,
          "orderMnemonic": "Sodium and Potassium Panel",
          "origOrderDate": "2023-03-06T03:14:59.000+00:00",
          "origOrderDateVc": "05-MAR-2023",
          "requestedStartDate": "2024-03-05T11:00:00.000+00:00",
          "requestedStartDateVc": "05-MAR-2024",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, *Est. Collection: 05-Mar-2024 +/- 28 day, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "06-FEB-2024 - 02-APR-2024",
          "hiddenData": {
            "dueStatusFlag": 0,
            "rowClass": "orderUpcoming"
          }
        },
        {
          "orderId": 1348823861,
          "orderMnemonic": "Sodium and Potassium Panel",
          "origOrderDate": "2023-03-06T03:14:59.000+00:00",
          "origOrderDateVc": "05-MAR-2023",
          "requestedStartDate": "2024-09-05T10:00:00.000+00:00",
          "requestedStartDateVc": "05-SEP-2024",
          "orderingProvider": "TestUser, Nephrologist-Physician, MD",
          "orderDetails": "Blood, Routine, *Est. Collection: 05-Sep-2024 +/- 28 day, once, Order for future visit",
          "orderingLocation": "VGH SOTRnl Dnr",
          "specimenType": "Blood",
          "collectionPriority": "Routine",
          "gracePeriod": "08-AUG-2024 - 03-OCT-2024",
          "hiddenData": {
            "dueStatusFlag": 0,
            "rowClass": "orderUpcoming"
          }
        }
      ]
    }
  ]
}
