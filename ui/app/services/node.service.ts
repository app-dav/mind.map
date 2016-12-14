/**
 * Created by appel on 12/13/2016.
 */
import {Injectable} from "@angular/core"

import {Node} from "../models/node";

@Injectable()
export class NodeService{
  GetNodes(): Node[] {
    return [new Node("first", null), new Node("second", null)];
  }
}
