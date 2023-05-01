import {  ChangeDetectionStrategy, 
          Component, 
          OnInit, 
          DoCheck, 
          ChangeDetectorRef, 
          ViewChild,
          AfterViewInit
         } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { TreeNode,PrimeIcons,FilterService } from 'primeng/api';
import { ThisReceiver } from '@angular/compiler';
import { TreeTable, TTBody } from 'primeng/treetable';
import { MpageArrayInputComponent, mPageService } from '@clinicaloffice/clinical-office-mpage';

interface Specimens {
  label: string,
  value: string 
}

interface LookOptions {
  label: string,
  value: number 
}

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
  })


export class OrdersTableComponent implements OnInit, AfterViewInit, DoCheck {

  @ViewChild("tt") treetable!: TreeTable;

  TypicalLabs($event:any) :void {
    console.log("TypicalLabs")
    console.log($event) 
    if ($event.checked == true) {
      console.log("checked - show common")
      this.treetable.filter('true','typicalLab','equals')
    } else {
      console.log("unchecked - show all")
      this.treetable.filter('true','typicalLab','contains')
    }
  }

  cols!: any[];
  level: number = 0;
  specimens: Specimens[] = [];
  loobackOptions: LookOptions[] = [];
  lookbackNumber: number = 1;

  lookforwardOptions: LookOptions[] = [];
  lookforwardNumber: number = 1;


  expanded: boolean = false;
  
  orderCounts!: any

  selectedSpecimen!: Specimens
  selectedProvider!: any
  selectedLocation!: any
  selectedLookback!: LookOptions
  selectedLookforward!: LookOptions

  typicalLab: boolean = true;

  loading: boolean = false;

  files!: TreeNode[];

  selectedOrders!: TreeNode[];

  constructor(
    public futureOrderDS: FutureorderService,
    public cdr: ChangeDetectorRef,
    public filterService: FilterService,
    public mPage: mPageService
  ) { 

    this.specimens = [
      {label: "Blood", value:"blood"},
      {label: "Non-Blood", value:"nonblood"}
    ]

    this.loobackOptions = [
      {label: "Months", value: 1},
      {label: "Weeks", value: 2},
      {label: "Days", value: 3}
    ]

    this.lookforwardOptions = [
      {label: "Months", value: 1},
      {label: "Weeks", value: 2},
      {label: "Days", value: 3}
    ]

    this.cols = [
      
      { field: 'orderMnemonic', header: 'Order' , sort: false},
      { field: 'orderingProvider', header: 'Provider', width: '150px', sort: false },
      { field: 'orderingLocation', header: 'Ordering Location' , width: '170px', sort: false},
      { field: 'origOrderDateVc', header: 'Order Date', width: '170px', sort: false },
      { field: 'note.marker', header: 'Lab Req Note', width: '120px', sort: true },
      { field: 'orderDetails', header: 'Details', sort: true },
    ];
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    this.treetable.filter('true','typicalLab','equals')
  }

  ngDoCheck(): void {  
      if (this.futureOrderDS.refresh === true) {
      setTimeout(() => {
        this.futureOrderDS.refresh = false;
      });
      this.cdr.detectChanges();
    }
     
    }

  ngOnInit(): void {
    
    
    this.files = this.futureOrderDS.futureOrders
    this.orderCounts = this.futureOrderDS.orderCounts
    this.loading = false;
    
    //this.selectedLookforward.label = "Months";
    //this.selectedLookback.label = "Months";
    
    console.log(this.files)
  }


  tableRefresh(): void{
    this.loading = true;
    //this.files = [];
    this.futureOrderDS.refresh = true
    this.futureOrderDS.loadFutureOrders()
    if (this.futureOrderDS.refresh === true) {
      setTimeout(() => {
        this.futureOrderDS.refresh = false;
        this.files = [...this.futureOrderDS.futureOrders];
        console.log(this.futureOrderDS.LastRefesh)
        console.log(this.files)
        this.cdr.detectChanges();
        this.loading = false;
      }, 500);
    }
    
  }

  activaterOrders($event:any) :void {
    console.log($event) 
    console.log("activaterOrders")
    
    var d=new Date();
      var twoDigit=function(num: string | number){(String(num).length<2)?num=String("0"+num):num=String(num);
        return num;
      };
      var activateDate=""+d.getFullYear()+twoDigit((d.getMonth()+1))+twoDigit(d.getDate())+twoDigit(d.getHours())+twoDigit(d.getMinutes())+twoDigit(d.getSeconds())+"99";
      console.log(activateDate)
      // @ts-ignore
      var PowerOrdersMPageUtils = window.external.DiscernObjectFactory("POWERORDERS");
      var hMoew = null;
      hMoew = PowerOrdersMPageUtils.CreateMOEW(this.mPage.personId, this.mPage.encntrId, 0, 2, 127)
      
    for (let ord of this.selectedOrders) {

      if (ord.data.orderId > 0) {
        this.mPage.putLog(`Order ID: ${ord.data.orderId}`)
        var success=PowerOrdersMPageUtils.InvokeActivateAction(hMoew,ord.data.orderId,activateDate);
      }
    }

    if(success){
        PowerOrdersMPageUtils.SignOrders(hMoew);
        PowerOrdersMPageUtils.DestroyMOEW(hMoew);
    }
  }   

  

  
  logChange($event:any) :void {
    console.log($event) 
    console.log("logChange")
  } 

  toggleVisibility(isChecked: boolean)
  {
  console.log(isChecked);
  }

  exapandNodes(nodes: any, event?: any) {
    /*if (event.value.value === "") {
      console.log("empty")
    }*/
    
    console.log(event); 

    for(let node of nodes) 
  { 
    if (node.children) {
          node.expanded = true;
        for (let cn of node.children) {
            this.exapandNodes(node.children);
        }
    }
  }
}

collapseNodes1(nodes: any, event?: any) {
  /*if (event.value.value === "") {
    console.log("empty")
  }*/

  console.log(event); 
  
  for(let node of nodes) 
{ 
  if (node.children) {
        node.expanded = false;
      for (let cn of node.children) {
          this.exapandNodes(node.children);
      }
  }
}
}

onExpandOneLevel() {
  console.log(this.files);
  if (this.expanded === false) {
  if (this.level === 0) {
    this.expandNodes(this.files);
  } else {
    this.traverse(
      this.files,
      (o, prop, value) => {
        if (prop === "children") {
          this.expandNodes(value);
        }
      },
      this.level
    );
  }

  this.level++;
  this.files = [...this.files];
  this.expanded = true
}
}

onCollapseOneLevel() {

  console.log(this.files);

  if (this.expanded === true) {

  this.level--;

  if (this.level === 0) {
    this.collapseNodes(this.files);
  } else {
    this.traverse(
      this.files,
      (o, prop, value) => {
        if (prop === "children") {
          this.collapseNodes(value);
        }
      },
      this.level
    );
  }

  this.files = [...this.files];
  this.expanded = false;
}

}

expandNodes(nodes: TreeNode<any>[]) {
  for (let node of nodes) {
    node.expanded = true;
  }
}

collapseNodes(nodes: TreeNode<any>[]) {
  for (let node of nodes) {
    node.expanded = false;
  }
}

traverse(
  o: any,
  fn: (obj: any, prop: string, value: any) => void,
  maxLvl: number,
  currentLvl: number = 0
) {
  if (currentLvl > maxLvl) return;

  for (const i in o) {
    fn.apply(this, [o, i, o[i]]);

    if (o[i] !== null && typeof o[i] === "object") {
      let currentNew = currentLvl + 1;
      this.traverse(o[i], fn, maxLvl, currentNew);
    }
  }
}


}