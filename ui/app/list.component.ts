/**
 * Created by appel on 12/13/2016.
 */
import {Component, OnInit} from "@angular/core";

import {Node} from "./models/node";
import {NodeService} from "./services/node.service";

@Component({
  selector: "list-view",
  templateUrl: "./templates/list.directive.html",
  moduleId: module.id
})


export class  ListComponent implements OnInit {

  constructor(private nodService: NodeService) {
    this.nodeService = nodService;
  }

  ngOnInit(): void {
    this.nodes = this.nodService.GetNodes();
  }

  private nodeService: NodeService;
  nodes: Node[];
  openAddNode: boolean;
}
