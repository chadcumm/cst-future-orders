import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mPageService, PersonService, EncounterService } from "@clinicaloffice/clinical-office-mpage";
import { FutureorderService } from './service/futureorder.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FutureorderService] 
})
export class AppComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    public mPage: mPageService,
    public personService: PersonService,
    public encntrService: EncounterService,
    public futureOrdersService: FutureorderService
  ) { }

  ngOnInit(): void {

    // Grab any parameters in the URL (Used in Cerner Components)
    this.activatedRoute.queryParams.subscribe(params => {
      this.mPage.personId = params.personId ? parseInt(params.personId) : this.mPage.personId;
      this.mPage.encntrId = params.encounterId ? parseInt(params.encounterId) : this.mPage.encntrId;
      this.mPage.prsnlId = params.userId ? parseInt(params.userId) : this.mPage.prsnlId;
    });

    // Perform MPage Initialization
    setTimeout((e: any) => {
      this.mPage.setMaxInstances(2, true, 'CHART');

      // Add your initialization code here - do not place outside setTimeout function
      //this.personService.load();
      //this.encntrService.load();
     this.futureOrdersService.loadFutureOrders();
    }, 0);
  }

}
