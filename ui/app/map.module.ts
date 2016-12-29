import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {MainComponent} from "./main.component";
import { MapComponent }  from './map.component';
import {ListComponent} from "./list.component";
import {AddNodeComponent} from "./add-node.component"
import {ConnectionFormComponent} from "./connection-form.component";

import {NodeService} from "./services/node.service";
import {ConnectionService} from "./services/connection.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MapComponent, ListComponent, AddNodeComponent, ConnectionFormComponent, MainComponent],
  bootstrap:    [ MainComponent ],
  providers: [NodeService, ConnectionService]
})
export class MapModule { }
