/**
 * Created by appel on 12/13/2016.
 */
import {Injectable} from "@angular/core"

import {Node} from "../models/node";

@Injectable()
export class NodeService{
  GetNodes(): Node[] {
    return this.nodes;
  }
  AddNode(nod:Node): void {
    this.nodes.push(nod);
  }

  private nodes:Node[] = [new Node("My first Node", "no desc")]
}
