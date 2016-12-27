/**
 * Created by appel on 12/27/2016.
 */
import {Injectable} from "@angular/core"

@Injectable()
export class TabService{
  ADD_NODE = Symbol("add");
  LIST_NODE = Symbol("list");
  CONNECT_NODE = Symbol("connect");
}
