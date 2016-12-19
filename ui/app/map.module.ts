import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { MapComponent }  from './map.component';
import {NodeService} from "./services/node.service";
import {ListComponent} from "./list.component";
import {AddNodeComponent} from "./add-node.component"

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MapComponent, ListComponent, AddNodeComponent ],
  bootstrap:    [ ListComponent ],
  providers: [NodeService]
})
export class MapModule { }
