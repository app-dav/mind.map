/**
 * Created by appel on 12/13/2016.
 */
import {Injectable} from "@angular/core"

import {Node} from "../models/node";

@Injectable()
export class NodeService{

  private _nodes:Node[] = [Object.create(Node.prototype)]

  GetNodes(): Node[] {
    return this._nodes;
  }
  AddNode(nod:Node): void {
    this._nodes.push(nod);
  }

  GetNode(id: number): Node {
    const rtn = this._nodes.find((element)=>{return element.Id === id});
    return rtn ? rtn : Object.create(Node.prototype);
  }
}
