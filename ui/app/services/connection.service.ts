/**
 * Created by appel on 12/27/2016.
 */
import {Injectable} from "@angular/core";

import {Connection} from "../models/connection";
import {element} from "protractor";

@Injectable()
export class ConnectionService{

  GetConnections(): Connection[] {return this._connections;}

  AddConnection(connection: Connection){
    this._connections.push(connection);
  }

  GetConnection(id: number): Connection{
    const rtn = this._connections.find((element)=> { return element.Id === id});
    return rtn ? rtn : Object.create(Connection.prototype);
  }

  private _connections: Connection[] =  [];
}
