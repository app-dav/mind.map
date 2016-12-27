/**
 * Created by appel on 12/13/2016.
 */
import {Component, OnInit} from "@angular/core";

import {Node} from "./models/node";
import {NodeService} from "./services/node.service";
import {TabService} from "./services/tab.service";

@Component({
  selector: "list-view",
  templateUrl: "templates/list.view.html",
  moduleId: module.id
})

export class  ListComponent implements OnInit {

  constructor(private nodService: NodeService, private tabService: TabService) {
  }

  ngOnInit(): void {
    this.nodes = this.nodService.GetNodes();
    this.openTab = this.LIST_NODE;
  }

  nodes: Node[];
  openTab: Symbol;
  ADD_NODE = Symbol("add");
  LIST_NODE = Symbol("list");
  CONNECT_NODE = Symbol("connect");
}

