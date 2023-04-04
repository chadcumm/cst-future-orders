import { ChangeDetectionStrategy, Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { TreeNode,PrimeIcons,FilterService } from 'primeng/api';
import { ThisReceiver } from '@angular/compiler';

interface Specimens {
  label: string,
  value: string 
}

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
  })


export class OrdersTableComponent implements OnInit, DoCheck {
  cols!: any[];
  level: number = 0;
  specimens: Specimens[] = [];
  loobackOptions: Specimens[] = [];
  lookforwardOptions: Specimens[] = [];

  expanded: boolean = false;
  
  orderCounts!: any

  selectedSpecimen!: Specimens
  selectedProvider!: any
  selectedLocation!: any
  selectedLookback!: Specimens
  selectedLookforward!: Specimens

  loading: boolean = false;

  files!: TreeNode[];
  constructor(
    public futureOrderDS: FutureorderService,
    public cdr: ChangeDetectorRef,
    public filterService: FilterService
  ) { 

    this.specimens = [
      {label: "Blood", value:"Blood"},
      {label: "Non-Blood", value:"nonblood"},
      {label: "All", value: ""}
    ]

    this.loobackOptions = [
      {label: "1 Month", value: "1"},
      {label: "2 Months", value: "2"},
      {label: "3 Months", value: "3"},
      {label: "4 Months", value: "4"},
      {label: "5 Months", value: "5"},
      {label: "6+ Months", value: ""},
    ]

    this.lookforwardOptions = [
      {label: "1 Month", value: "1"},
      {label: "2 Months", value: "2"},
      {label: "3 Months", value: "3"},
      {label: "4 Months", value: "4"},
      {label: "5 Months", value: "5"},
      {label: "6+ Months", value: ""},
    ]

    this.cols = [
      
      { field: 'orderMnemonic', header: 'Order' },
      { field: 'orderingProvider', header: 'Provider', width: '150px' },
      { field: 'orderingLocation', header: 'Ordering Location' , width: '170px'},
      { field: 'origOrderDateVc', header: 'Order Date', width: '170px' },
      { field: 'orderDetails', header: 'Details' },
    ];
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
  
  logChange($event:any) :void {
    console.log($event.value.name) 
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