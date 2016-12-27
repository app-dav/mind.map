/**
 * Created by appel on 12/16/2016.
 */
import {Component, Input} from "@angular/core";

import {Node} from "./models/node";
import {NodeService} from "./services/node.service";

@Component({
  templateUrl: "./templates/add.node.html",
  selector: "add-node",
  moduleId: module.id
})

export class AddNodeComponent {

  constructor(private nodService:NodeService){

  }

  addNode(): void{
    this.nodService.AddNode(this.newNod);
  }

  @Input()
  newNod: Node = {Name: "", Description:""};

  descLabel: string = "Enter Desc (opt)";
  nameLabel: string = "Enter Name";
  nodeAddSuccess: boolean
}
