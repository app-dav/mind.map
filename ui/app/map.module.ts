import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MapComponent }  from './map.component';
import {NodeService} from "./services/node.service";
import {ListComponent} from "./list.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MapComponent, ListComponent ],
  bootstrap:    [ ListComponent ],
  providers: [NodeService]
})
export class MapModule { }
