import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { TreeNode,PrimeIcons } from 'primeng/api';
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


export class OrdersTableComponent implements OnInit {
  cols!: any[];
  level: number = 0;
  specimens: Specimens[] = [];
  expanded: boolean = false;
  
  orderCounts!: any

  selectedSpecimen!: Specimens
  selectedProvider!: any
  selectedLocation!: any

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
      
      { field: 'orderMnemonic', header: 'Order' },
      { field: 'orderingProvider', header: 'Provider', width: '150px' },
      { field: 'orderingLocation', header: 'Ordering Location' , width: '170px'},
      { field: 'origOrderDateVc', header: 'Order Date', width: '170px' },
      { field: 'orderDetails', header: 'Details' },
    ];
  }

  ngOnInit(): void {
    
    this.files = this.futureOrderDS.futureOrders
    this.orderCounts = this.futureOrderDS.orderCounts
    console.log(this.files)
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