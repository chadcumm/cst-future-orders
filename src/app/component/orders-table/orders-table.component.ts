import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FutureorderService } from 'src/app/service/futureorder.service';
import { TreeNode } from 'primeng/api';
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
      { field: 'requestedStartDateVc', header: 'Est Collection Date', width: '150px' },
      { field: 'orderMnemonic', header: 'Order', width: '100px' },
      { field: 'orderingProvider', header: 'Provider', width: '100px' },
      { field: 'orderingLocation', header: 'Ordering Location' , width: '150px'},
      { field: 'origOrderDateVc', header: 'Order Date', width: '100px' },
      { field: 'orderDetails', header: 'Details', width: '500px' },
    ];
  }

  ngOnInit(): void {
    
    this.files = this.futureOrderDS.futureOrders
    console.log(this.files)
  }

  
  logChange($event:any) :void {
    console.log($event.value.value) 
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